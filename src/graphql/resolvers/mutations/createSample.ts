import { Sample } from '@/models';

export default async (root, { name }) => {
  return await Sample.create({ name });
};
