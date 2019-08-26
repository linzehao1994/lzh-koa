import Dataloader from 'dataloader';

import { Sample } from '@/models';

export default new Dataloader(
  async (_ids: string[]) => {
    return await Sample.find({
      _id: { $in: _ids }
    });
  },
  { cache: false }
);
