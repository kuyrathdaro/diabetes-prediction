from fastapi.responses import JSONResponse

def api_response(message: str, data=None, status_code: int = 200):
    return JSONResponse(
        status_code=status_code,
        content={
            "message": message,
            "data": data
        }
    )