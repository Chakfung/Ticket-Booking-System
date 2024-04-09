<template>
  <div id="OrderPage">
    <el-form ref="form" :model="form" label-width="80px" class="el-form">
      <el-form-item label="Name" class="el-form-item">
        <el-input v-model="form.name" class="el-input"></el-input>
      </el-form-item>
      <el-form-item label="UniqueCode">
        <el-input v-model="form.uniqueCode"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="info" @click="checkTicket()">Check</el-button>
        <el-button @click="clearForm()">Clear</el-button>
      </el-form-item>
    </el-form>
    <el-dialog
      title="Order"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <div class="order-box">
        <div class="top">
          <img src="@/assets/images/pop.png" alt="" />
          BU CINEMA
          <img src="@/assets/images/pop.png" alt="" />
        </div>
        <div class="below">
          <div class="name">Dear Vincent,</div>
          <div class="thank">Thanks you for your order!</div>
          <div class="detail">
            <div class="title">Ticket Detail</div>
            <div class="item">
              <span class="key">Movie Name</span>
              <span class="value">Bad man</span>
            </div>
            <div class="item">
              <span class="key">Movie Date</span>
              <span class="value">2024.4.1</span>
            </div>
            <div class="item">
              <span class="key">Movie Time</span>
              <span class="value">15:30</span>
            </div>
            <div class="item">
              <span class="key">Hall</span>
              <span class="value">3</span>
            </div>
            <div class="item">
              <span class="key">Seat</span>
              <span class="value">A3</span>
            </div>
            <div class="item">
              <span class="key">Unique Code</span>
              <span class="value">AD217G6DS7F9ASD3</span>
            </div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="info" @click="handleRefund()">Refund</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        uniqueCode: ''
      },
      dialogVisible: false
    }
  },
  methods: {
    checkTicket() {
      this.dialogVisible = true
    },
    clearForm() {
      this.form = {
        name: '',
        uniqueCode: ''
      }
    },
    handleRefund(done) {
      this.$confirm('Confirm Refund？', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        type: 'info'
      })
        .then(() => {
          this.dialogVisible = false
          this.$message({
            type: 'success',
            message: 'Refund Successful'
          })
          done()
        })
        .catch(() => {})
    }
  }
}
</script>

<style lang="scss">
#OrderPage {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .el-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 500px;
    height: 839px;

    .el-form-item__label {
      color: #ffffff;
      font-size: 24px;
    }

    .el-input {
      width: 250px;
    }
  }
  .order-box {
    border: 2px $brand-primary solid;
    .top {
      width: 100%;
      height: 200px;
      background-color: #ffcb2f;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 35px;
      color: $brand-primary;
      img {
        width: 35px;
      }
    }
    .below {
      padding: 20px;
      margin-top: 10px;
      .name {
        text-align: left;
        font-size: 30px;
        color: #000;
      }
      .thank {
        margin-top: 20px;
        color: #000;
        text-align: left;
        font-size: 16px;
      }
      .detail {
        .title {
          text-align: left;
          margin-top: 20px;
          font-size: 30px;
          color: #000;
          padding-bottom: 10px;
          border-bottom: 2px #000 solid;
          margin-bottom: 10px;
        }

        .item {
          text-align: left;

          .key {
            display: inline-block;
            color: #000;
            width: 100px;
          }
          .value {
            margin-left: 100px;
            width: 100px;
            color: #000;
          }
        }
      }
    }
  }
}
</style>
