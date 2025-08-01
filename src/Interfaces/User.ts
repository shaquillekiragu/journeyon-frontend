interface User {
  id: number;
  firstName: string;
  lastName: string;
  courseId: number;
  progressScore: number;
  email: string;
  role: string;
  tokenData: {
    access_token: string;
    token_expiration: string;
  };
};

interface LoginCredentials {
  email: string;
  password: string;
};

type LoginResponse = {
  data: User;
  message: string;
};


export type { User, LoginCredentials, LoginResponse };