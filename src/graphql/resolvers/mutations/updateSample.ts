import { Sample } from '@/models';

export default async (root, { _id, name }) => {
  return await Sample.findByIdAndUpdate(_id, { $set: { name } }, { new: true });
};
