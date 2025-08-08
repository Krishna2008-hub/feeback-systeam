import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

export default mongoose.model("Teacher", TeacherSchema);
