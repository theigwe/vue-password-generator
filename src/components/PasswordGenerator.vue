<template>
  <div class="container wrapper">
    <div class="row justify-content-center align-items-center">
      <div class="col-12 col-md-6 py-5">
        <el-card class="box-card">
          <div slot="header">
              <div class="d-flex align-items-center">
                  <strong>Password Generator</strong>
                <el-link class="ml-auto" type="primary" :underline="false" href="https://twitter.com/sammynigwe" target="_blank">@sammynigwe</el-link>
              </div>
            
            
          </div>
          <div class="mb-3 d-block">
            <el-input placeholder="No password generated" v-model="password" readonly>
              <template slot="append">
                  <el-button v-clipboard="() => password" v-clipboard:success="passwordCopied"> <i class="el-icon-copy-document text-success"></i></el-button>
              </template>
              <template slot="append">
                  <el-button @click="password = ''"> <i class="el-icon-delete text-success"></i></el-button>
              </template>
            </el-input>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 mb-2">
              <div class="d-flex">
                <el-input-number class="flex-grow-1" v-model="length" :min="4" :max="50"></el-input-number>
              </div>
            </div>
            <div class="col-12 col-md-6 mb-2">
              <el-input placeholder="Values to exclude" v-model="exclude">
                <template slot="prepend">Exclude</template>
              </el-input>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-md-6 mb-2">
              <el-checkbox
                class="d-block"
                v-model="uppercase"
                label="Uppercase Letters (A-Z)"
                border
              ></el-checkbox>
            </div>
            <div class="col-12 col-md-6 mb-2">
              <el-checkbox
                class="d-block"
                v-model="lowercase"
                label="Lowercase Letters (a-z)"
                border
              ></el-checkbox>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-md-6 mb-2">
              <el-checkbox class="d-block" v-model="numbers" label="Include Numbers (0-9)" border></el-checkbox>
            </div>
            <div class="col-12 col-md-6 mb-2">
              <el-checkbox class="d-block" v-model="symbols" label="Include Symbols" border></el-checkbox>
            </div>
          </div>

          <div class="mt-4">
            <!-- <button class="btn btn-success btn-block"></button> -->
            <el-button class="btn-block" type="success" @click="generate" plain>Generate Password</el-button>
          </div>

          <div class="mt-5">
              <hr>
            <p class="text-muted text-center">
              <small>
                Ndubuisi Samuel
                <a href="mailto:samniwebdev@gmail.com" class="text-primary">Hire me</a>
              </small>
            </p>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uppercase: false,
      lowercase: false,
      numbers: false,
      symbols: false,
      length: 6,
      password: "",
      exclude: "",
      passwordGenerator: null
    };
  },
  methods: {
    generate() {
      this.password = this.passwordGenerator.generate({
        length: this.length,
        numbers: this.numbers,
        uppercase: this.uppercase,
        lowercase: this.lowercase,
        symbols: this.symbols,
        exclude: this.exclude,
        strict: true
      });
    },
    passwordCopied() {
        this.$message({
            message: 'Password copied to clipboard',
            type: 'success'
        });
    }
  },
  mounted() {
    this.passwordGenerator = window.Generator;
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: inherit;
  .row {
    min-height: inherit !important;
  }
}
</style>