import { Sample } from '@/models';

export default async (root, { _id }) => {
  await Sample.remove({ _id });
  return true;
};
