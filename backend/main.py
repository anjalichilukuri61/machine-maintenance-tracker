from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from database import SessionLocal, engine
from models import Base, Machine
Base.metadata.create_all(bind=engine)
app=FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allows all frontend URLs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class MachineCreate(BaseModel):
    name: str
    status: str
    location: str
@app.post("/machines")
def add_machine(machine: MachineCreate):

    db = SessionLocal()

    new_machine = Machine(
        name=machine.name,
        status=machine.status,
        location=machine.location
    )

    db.add(new_machine)
    db.commit()
    db.refresh(new_machine)

    return {
        "message": "Machine added successfully",
        "data": {
            "id": new_machine.id,
            "name": new_machine.name,
            "status": new_machine.status,
            "location": new_machine.location
        }
    }
@app.get("/machines")
def get_machinedetails():
    db=SessionLocal()
    machines=db.query(Machine).all()
    return machines
@app.put("/machines/{machine_id}")
def update_machine(machine_id: int, updated_machine: MachineCreate):

    db = SessionLocal()

    machine = db.query(Machine).filter(Machine.id == machine_id).first()

    if not machine:
        return {"message": "Machine not found"}

    machine.name = updated_machine.name
    machine.status = updated_machine.status
    machine.location = updated_machine.location

    db.commit()
    db.refresh(machine)

    return {
        "message": "Machine updated successfully",
        "data": {
            "id": machine.id,
            "name": machine.name,
            "status": machine.status,
            "location": machine.location
        }
    }
@app.delete("/machines/{machine_id}")
def delete_machine(machine_id: int):

    db = SessionLocal()

    machine = db.query(Machine).filter(Machine.id == machine_id).first()

    if not machine:
        return {"message": "Machine not found"}

    db.delete(machine)
    db.commit()

    return {
        "message": "Machine deleted successfully",
        "deleted_id": machine_id
    }

