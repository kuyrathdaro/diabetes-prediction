from fastapi import APIRouter, HTTPException
from app.core.model import train_model

router = APIRouter()

@router.post("/train-model")
def train():
    try:
        train_model()
        return {"message": "Model trained successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))