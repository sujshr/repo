const checkEmptyBody = (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: "Request body cannot be empty" });
    }
    next(); 
  };
  
  export default checkEmptyBody;
  