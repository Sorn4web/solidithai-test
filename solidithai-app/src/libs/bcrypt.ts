import bcrypt from "bcryptjs";

export const generateEncryptedPassword = (password: string): string => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};
