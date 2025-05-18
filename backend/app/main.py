from fastapi import FastAPI
from app.api.v1 import predict, train

app = FastAPI(title="Diabetes Prediction API")

app.include_router(train.router)
app.include_router(predict.router)