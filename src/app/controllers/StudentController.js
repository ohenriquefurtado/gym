import Student from '../models/student';

class StudentController {
  async create(req, res) {
    const studentExist = await Student.findOne({
      where: { email: req.body.email },
    });
    if (studentExist) {
      return res.status(400).json({ error: 'Usuário já cadastrado' });
    }
    const { id, name, email, birth, height, weight } = await Student.create(
      req.body
    );

    return res.json({
      id,
      name,
      email,
      birth,
      height,
      weight,
    });
  }
}
export default new StudentController();
