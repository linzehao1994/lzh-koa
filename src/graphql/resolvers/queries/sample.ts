import { props } from 'bluebird';
import { Sample } from '@/models';

export default async (root, { _id, name, offset, limit, sort, order }) => {
  const query = {};

  if (_id) {
    Object.assign(query, { _id: { $in: _id } });
  }

  if (name) {
    Object.assign(query, { name: new RegExp(name, 'i') });
  }

  return await props({
    count: Sample.countDocuments(query),
    data: Sample.find(query)
      .skip(offset)
      .limit(limit)
      .sort({
        [sort]: order
      })
  });
};
