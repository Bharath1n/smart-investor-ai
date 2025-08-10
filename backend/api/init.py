from fastapi import APIRouter
from api.predict import router as predict_router

api_router = APIRouter()
api_router.include_router(predict_router, prefix="/api/predict", tags=["Predict"])
