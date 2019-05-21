<template>
  <div class="edit_container">
      <div class="editbox">
          <quill-editor 
              v-model="content1" 
              ref="myQuillEditor" 
              :options="editorOption" 
              @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
              @change="onEditorChange($event)">
          </quill-editor>
          <button v-on:click="saveHtml($event,content1)">保存</button>
      </div>
        
        
        <div class="editbox">
            <quill-editor 
                v-model="content2" 
                ref="myQuillEditor" 
                :options="editorOption" 
                @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                @change="onEditorChange($event)">
            </quill-editor>
            <button v-on:click="saveHtml($event,content2)">保存</button>
        </div>
    </div>  
</template>

<script>
export default {
    name: 'App',
    data(){
        return {
            content1: `<p>hello world</p>`,
            content2:`<p>就阿斯达就是大事</p>`,
            editorOption: {}
        }
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
    },
    methods: {
        onEditorReady(editor) { // 准备编辑器
        },
        onEditorBlur(){}, // 失去焦点事件
        onEditorFocus(){}, // 获得焦点事件
        onEditorChange(){}, // 内容改变事件
        saveHtml:function(event,msg){
          alert(msg)
        }
    }
}
</script>

<style scoped lang="less">
    .edit_container{
        width: 60%;
        margin: 0 auto
    }
    .editbox{
        margin: 20px auto;
        border: 1px solid #eaeefb;
    }
</style>
