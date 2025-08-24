# Assets 文件夹说明

这个文件夹包含博客的自定义样式和脚本文件。

## 文件结构

```
assets/
├── css/
│   ├── index.css      # 首页自定义样式
│   └── post.css       # 文章页自定义样式
└── js/
    └── index.js       # 首页自定义JavaScript
```

## 文件说明

### CSS 文件

#### `css/index.css`
- 首页的自定义样式
- 包含渐变背景、卡片效果、动画等
- 对应 config.json 中的 `indexStyle` 字段

#### `css/post.css` 
- 文章页面的自定义样式
- 包含文章内容美化、代码块样式等
- 对应 config.json 中的 `style` 字段

### JavaScript 文件

#### `js/index.js`
- 首页的自定义交互功能
- 包含主容器添加、描述优化、动画效果等
- 对应 config.json 中的 `indexScript` 字段

## 使用方法

在 `config.json` 中通过 CDN 引用这些文件：

```json
{
    "style": "<link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/woohui/lite@main/assets/css/post.css' />",
    "indexStyle": "<link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/woohui/lite@main/assets/css/index.css' />",
    "indexScript": "<script src='https://cdn.jsdelivr.net/gh/woohui/lite@main/assets/js/index.js'></script>"
}
```

## 优势

1. **代码分离**：CSS 和 JavaScript 代码独立管理
2. **可维护性**：更容易编辑和调试样式
3. **缓存优化**：浏览器可以缓存这些文件
4. **版本控制**：可以轻松跟踪样式变更历史
