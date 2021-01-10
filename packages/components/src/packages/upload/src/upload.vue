<template>
  <div>
    <el-upload
      :on-preview="handlePreview"
      :on-success="handleSuccess"
      :on-remove="handleRemove"
      :headers="headers"
      :file-list="fileList"
      :action="action"
      :accept="accept"
      :limit="maxLength"
      ref="upload"
      list-type="picture-card"
    >
      <i class="el-icon-plus avatar-uploader-icon"></i>
      <template v-slot:file="props">
        <slot name="file" :data="handleSlotProp(props.file)" v-if="props.file.status === 'success'">
          <CoImg :src="props.file.url"></CoImg>
          <span class="el-upload-list__item-actions">
            <span
              class="el-upload-list__item-preview"
              @click="handlePreview(props.file)"
            >
              <i class="el-icon-zoom-in"></i>
            </span>
            <span
              class="el-upload-list__item-delete"
              @click="handleRemove(props.file)"
            >
              <i class="el-icon-delete"></i>
            </span>
          </span>
        </slot>
      </template>
    </el-upload>
  </div>
</template>

<script>
import CoImg from '../../img'

export default {
  name: 'CoUpload',
  components: { CoImg },
  model: {
    prop: 'fileUrlString',
    event: 'change'
  },
  props: {
    maxLength: {
      type: Number,
      default: 3
    },
    fileUrlString: {
      required: true,
      type: String
    },
    action: {
      type: String,
      default: ''
    },
    accept: {
      type: [String],
      default: ''
    },
    Joiner: {
      required: true,
      type: String
    },
    headers: {
      type: Object,
      default () { return { /* accesstoken: getToken() */} }
    }
  },
  watch: {
    fileUrlString: {
      handler (v) {
        console.log(v)
        if (!v) {
          this.fileList = []
          return
        }
        const innerV = this.fileList.map(item => item.url).join(this.Joiner)
        if (v === innerV) return
        const files = this.fileUrlString
          ? this.fileUrlString.split(this.Joiner).map(item => { return { url: item } })
          : []
        this.fileList = [...files]
      },
      immediate: true
    }
  },
  data () {
    return {
      fileList: []
    }
  },
  methods: {
    handlePreview ({ url }) {
      this.$imageViewer.show([url], 30000)
    },
    handleSuccess (response, file, fileList) {
      const url = response && response.data && response.data.fileUrl
      if (!url) {
        this.$message.error('上传成功，没有拿到 fileId 字段')
      }
      file.url = url

      this.fileList = fileList
      // 当需要表单校验的情况，可以用于清除表单错误
      this.$emit('change', this.fileList.map(item => item.url).join(this.Joiner))
    },
    handleRemove (file, fileList) {
      fileList && (this.fileList = fileList)
      const uid = file.uid
      const idx = this.fileList.findIndex(file => { return file.uid === uid })
      if (idx > -1) {
        this.fileList.splice(idx, 1)
      }
      this.$emit('change', this.fileList.map(item => item.url).join(this.Joiner))
    },
    handleSlotProp (file) {
      return {
        file,
        handleRemove: this.handleRemove.bind(this, file, this.fileList),
        handlePreview: this.handlePreview.bind(this, file)
      }
    }
  }
}
</script>
