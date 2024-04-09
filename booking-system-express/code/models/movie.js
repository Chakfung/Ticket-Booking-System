const movieCollection = require("../config/mongoDbConnection").getCollection(
  "movieCollection"
);
const { ObjectId } = require("mongodb");

exports.save = async (post) => {
  try {
    const col = await movieCollection();
    const result = await col.insertOne(post);
    console.log(result);
    return result.ops && result.ops[0];
  } catch (error) {
    throw "add movie to database error";
  }
};

exports.findAll = async () => {
  try {
    const col = await movieCollection();
    return col.find({}).toArray();
  } catch (error) {
    throw "get all movies error";
  }
};

exports.update = async (id, movie) => {
  try {
    const col = await movieCollection();
    const result = await col.findOneAndUpdate(
      { _id: ObjectId(id) },
      { $set: movie },
      { returnOriginal: false }
    );
    return result.value;
  } catch (error) {
    throw "update movie error";
  }
};

exports.delete = async (id) => {
  try {
    const col = await movieCollection();
    await col.deleteOne({ _id: ObjectId(id) });
  } catch (error) {
    throw "delete movie error";
  }
};

// exports.deleteCommentByUser = async (postId, user) => {
//   try {
//     const col = await postCollection();
//     await col.updateOne(
//       { _id: ObjectId(postId) },
//       { $pull: { comments: { user } } }
//     );
//   } catch (error) {
//     throw "根据用户名删除评论出错";
//   }
// };
