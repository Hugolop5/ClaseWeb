const errorHandler = (error, req, res, next) => {
  console.error(error.message); 
  res.status(500).json({ 
    message: 'Error interno del servidor' 
  });
};

export default errorHandler;