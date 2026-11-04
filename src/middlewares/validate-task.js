const validateTask = (req, res, next) => {
  const { title, status } = req.body;

  // Verificacion
  if (
    !title || typeof title !== 'string' || title.trim() === '' ||
    !status || typeof status !== 'string' || status.trim() === ''
  ) {
    return res.status(400).json({
      error: 'El título y el estado no son texto válido'
    });
  }

  
  next();
};

export default validateTask;