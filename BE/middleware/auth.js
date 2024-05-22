import pkg from 'jsonwebtoken'

const { verify } = pkg

export const authenticate = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '')
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' })
  }

  try {
    const decoded = verify(token, 'your_jwt_secret')
    req.user = decoded
    next()
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' })
  }
}

export const authorize = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: 'Access denied' })
  }
  next()
}
