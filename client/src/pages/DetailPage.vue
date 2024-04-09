<template>
  <div id="DetailPage">
    <el-row class="top">
      <el-col :span="8">
        <div class="grid-content bg-purple left">
          <div class="detail">
            <div class="time">
              <span>12:30</span>
              <span>duration: 120mins</span>
            </div>
            <div class="hall">Hall:3</div>
            <div class="name">Bad man</div>
            <div class="release">2024</div>
            <div class="company">
              <span>company:</span>
              <span>netfix</span>
            </div>
            <div class="director">
              <span>director:</span>
              <span>Jackey Wong</span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8"
        ><div class="grid-content bg-purple-light middle">
          <youtube
            class="youtube"
            :video-id="
              getIdFromURL('https://www.youtube.com/watch?v=mqqft2x_Aa4')
            "
            player-width="100%"
            player-height="100%"
          ></youtube>
          <!-- <img src="../assets/images/movie1.png" alt="" /> -->
        </div></el-col
      >
      <el-col :span="8"
        ><div class="grid-content bg-purple right">
          <div class="rate">
            <span>rate</span>
            <div class="star">
              <i class="el-icon-star-on"></i><i class="el-icon-star-on"></i
              ><i class="el-icon-star-on"></i><i class="el-icon-star-off"></i
              ><i class="el-icon-star-off"></i>
            </div>
          </div>
          <div class="des">
            <div class="box">available</div>
            <div class="box">unavailable</div>
            <div class="box">selected</div>
          </div>
        </div></el-col
      >
    </el-row>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark below">
          <div class="seat-container">
            <div class="column">
              <div class="item available">A1</div>
              <div class="item unavailable">B1</div>
              <div class="item available selected">C1</div>
              <div
                class="item"
                :class="{ selected: isSelected }"
                @click="toSelect()"
              >
                D1
              </div>
              <div class="item">E1</div>
              <div class="item">F1</div>
            </div>
            <div class="column">
              <div class="item">A2</div>
              <div class="item">B2</div>
              <div class="item">C2</div>
              <div class="item">D2</div>
              <div class="item">E2</div>
              <div class="item">F2</div>
            </div>
            <div class="column">
              <div class="item">A3</div>
              <div class="item">B3</div>
              <div class="item">C3</div>
              <div class="item">D3</div>
              <div class="item">E3</div>
              <div class="item">F3</div>
            </div>
            <div class="column">
              <div class="item">A4</div>
              <div class="item">B4</div>
              <div class="item">C4</div>
              <div class="item">D4</div>
              <div class="item">E4</div>
              <div class="item">F4</div>
            </div>
            <div class="column">
              <div class="item">A5</div>
              <div class="item">B5</div>
              <div class="item">C5</div>
              <div class="item">D5</div>
              <div class="item">E5</div>
              <div class="item">F5</div>
            </div>
            <div class="column">
              <div class="item">A6</div>
              <div class="item">B6</div>
              <div class="item">C6</div>
              <div class="item">D6</div>
              <div class="item">E6</div>
              <div class="item">F6</div>
            </div>
          </div>
        </div></el-col
      >
    </el-row>

    <el-drawer
      title="Ticket Booking"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="info" @click="onSubmit">Buy!</el-button>
          <el-button
            @click="
              drawer = false
              isSelected = false
            "
            >Cancel</el-button
          >
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script>
import { getIdFromURL } from 'vue-youtube-embed'
export default {
  data() {
    return {
      isSelected: false,
      drawer: false,
      direction: 'rtl',
      form: {
        name: '',
        email: '',
        phone: ''
      }
    }
  },
  methods: {
    getIdFromURL(url) {
      return getIdFromURL(url)
    },
    toSelect() {
      this.isSelected = !this.isSelected
      this.drawer = true
    },
    handleClose(done) {
      this.$confirm('Confirm Cancel?', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        type: 'info'
      })
        .then(() => {
          this.isSelected = false
          done()
        })
        .catch(() => {})
    },
    onSubmit() {},
    async fetch() {
      // const res = await this.$http.get('/hello')
      // console.log(res)
    }
  },
  mounted() {
    this.fetch()
  }
}
</script>

<style lang="scss" scoped>
$available-color: rgba($brand-accent, 0.9);
$unavailable-color: #9a0000;
#DetailPage {
  background: #fff;
  .top {
    background: $brand-accent;
    height: 220px;
    border: 2px solid $brand-primary;
    padding: 10px;
    .left {
      text-shadow: 1px 1px 3px darken($brand-primary, 10%);
      .detail {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .time {
          font-size: 28px;
          color: #0e3637;
        }
        .hall {
          margin-top: 20px;
          font-size: 28px;
          color: #0e3637;
        }
        .name {
          margin-top: 20px;
          font-size: 36px;
          color: #0e3637;
        }
        .release {
          margin-top: 20px;
        }
      }
    }

    .middle {
      width: 450px;
      .youtube {
        height: 200px;
      }
      img {
        width: 100%;
      }
    }
    .right {
      height: 160px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .des {
        display: flex;
        align-items: center;
        flex-direction: column;
        .box {
          margin-top: 10px;
          width: 200px;
          box-shadow: 0 2px 5px 2px rgba(darken($brand-primary, 40%), 0.75);
          text-shadow: 1px 1px darken($brand-primary, 10%);
          color: #fff;
          &:nth-child(1) {
            background-color: $available-color;
          }
          &:nth-child(2) {
            background-color: $unavailable-color;
          }
          &:nth-child(3) {
            background-color: rgb(0, 155, 34);
          }
        }
      }
    }
  }

  .below {
    border: 2px solid $brand-primary;
    display: flex;
    justify-content: center;
    height: 100%;
  }
  .seat-container {
    display: flex;
    width: 80%;
    justify-content: space-around;
    transform: perspective(50em) rotateX(40deg);
    .column {
      width: 160px;
      display: flex;
      flex-direction: column;
      color: white;
      box-shadow: 0 2px 5px 2px rgba(darken($brand-primary, 40%), 0.75);
      text-shadow: 1px 1px darken($brand-primary, 40%);
      .item {
        user-select: none;
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px $brand-primary solid;
        &.unavailable {
          background-color: $unavailable-color;
        }
        &.available {
          background-color: $available-color;
          cursor: pointer;

          &:hover:not(.selected) {
            background-color: whitesmoke;
            color: black;
          }
        }
        &.selected {
          background-color: rgb(0, 155, 34);
        }
      }
    }
  }
  .el-form {
    .el-form-item {
      width: 80%;
    }
  }
}
</style>
