import { body, validationResult } from 'express-validator';

// 1. Cadena de reglas 
export const validateTaskRules = [
  body('title')
    .trim()
    .notEmpty().withMessage('El título es obligatorio')
    .isString().withMessage('El título debe ser texto'),
    
  body('status')
    .trim()
    .notEmpty().withMessage('El estado es obligatorio')
    .isIn(['TODO', 'DONE']).withMessage('El estado debe ser exactamente TODO o DONE'),
    
  body('project')
    .optional()
    .trim()
    .isString().withMessage('El proyecto debe ser texto'),

  // 2. Middleware que revisa el resultado 
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];