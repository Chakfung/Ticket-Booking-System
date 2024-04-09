const orderCollection = require("../config/mongoDbConnection").getCollection(
    "orderCollection"
  );
  const { ObjectId } = require("mongodb");
  
  exports.save = async (order) => {
    try {
      const col = await orderCollection();
      const result = await col.insertOne(order);
      console.log(result);
      return result.ops && result.ops[0];
    } catch (error) {
      throw "add order to database error";
    }
  };
  
  exports.findAll = async () => {
    try {
      const col = await orderCollection();
      return col.find({}).toArray();
    } catch (error) {
      throw "get all order error";
    }
  };
  
  exports.update = async (id, order) => {
    try {
      const col = await orderCollection();
      const result = await col.findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: order },
        { returnOriginal: false }
      );
      return result.value;
    } catch (error) {
      throw "update order error";
    }
  };
  
  exports.delete = async (id) => {
    try {
      const col = await orderCollection();
      await col.deleteOne({ _id: ObjectId(id) });
    } catch (error) {
      throw "delete order error";
    }
  };
  
  // exports.deleteCommentByUser = async (orderId, user) => {
  //   try {
  //     const col = await orderCollection();
  //     await col.updateOne(
  //       { _id: ObjectId(orderId) },
  //       { $pull: { comments: { user } } }
  //     );
  //   } catch (error) {
  //     throw "根据用户名删除评论出错";
  //   }
  // };
  