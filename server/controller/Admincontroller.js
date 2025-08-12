import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@shopeasy.com';
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || bcrypt.hashSync('admin123', 10);

export const adminLoginHandler = async (req, res) => {
    const { email, password } = req.body;
    if (email !== ADMIN_EMAIL) {
        return res.status(401).json({ message: 'Invalid admin email' });
    }
    const validPassword = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
    if (!validPassword) {
        return res.status(401).json({ message: 'Invalid password' });
    }
    const token = jwt.sign({ email: ADMIN_EMAIL, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
};