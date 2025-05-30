# main.py
from fastapi import FastAPI, Request
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Message(BaseModel):
    text: str

messages = []

@app.post("/messages")
async def create_message(message: Message):
    messages.append(message)
    return {"status": "message added"}

@app.get("/messages", response_model=List[Message])
async def read_messages():
    return messages