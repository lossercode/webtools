### css 固定某个元素至页面底部

1. 使用 flex 布局，body 设置为 flex, 并且 **min-height 100vh** 中间部分设置 flex:1, 自动增长，页面底部高度固定。
2. 使用 position:fixed 定位，bottom:0, 但是手机端适配不好。
3. 给 body 设置一个负的 padding，padding 值为要固定的元素的高度。 
