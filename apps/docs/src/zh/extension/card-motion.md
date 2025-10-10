---
title: CardMotion
description: 给你真实卡片的动画
---

# CardMotion

功能：

- 在翻转与切换到下一张卡片时，展示真实、流畅的动画
- 轻易地与你的任何模板集成
- 支持所有 Anki 客户端，包括 Anki Desktop、AnkiMobile、AnkiDroid、AnkiWeb
- 按照你的喜好进行充分定制，例如动画速度曲线、外观、翻转时播放声音等等

| AnkiMobile                                            | AnkiDroid                                                 |
| ----------------------------------------------------- | --------------------------------------------------------- |
| ![card-motion](/extension-assets/card-motion-ios.gif) | ![card-motion](/extension-assets/card-motion-android.gif) |

## 安装

### 手动新建或集成到现有的模板（推荐）

- 新建模板: 创建对应字段后，将以下三部分代码粘贴入 Anki 模板编辑器
- 集成：可自定义卡片正面和背面的展示区域代码已高亮展示，你可以将自己模板的内容粘贴到此处

> [!WARNING]
> 请勿在 Back Template 中使用 Anki 的 FrontSide 字段，这会与本插件冲突

<!--@include: ../../parts/ext-cm-install.md -->

### 通过下载 Deck 安装

你也可以从 AnkiWeb 直接[下载](https://ankiweb.net/shared/info/1841184152)，但这里的文件基本不会是最新的。如果你希望获取最新的代码，请直接使用第一种安装方式

## 自定义

### 样式

在 Styling 顶部已预定义了一些 CSS 变量，如果满足需求请优先修改此处的值

```css
:root {
  --ae-card-height: 600px; /* 卡片高度 */
  --ae-card-width: 80vw; /* 卡片宽度 */
  --ae-card-border-radius: 8px; /* 卡片圆角大小 */
  --ae-front-bg: #1e1e1e; /*卡片前面背景*/
  --ae-back-bg: #2c2c2c; /*卡片背面背景*/
  --ae-card-border: 1px solid #2c2c2c; /*卡片边框颜色*/
}
```

当然你也可以修改其他高级样式，例如阴影样式、动画速度与曲线等等，可以结合 LLM 进行修改 CSS

### 卡片翻转回调

通过设置以下全局变量，在卡片卡片翻转时进行一些操作，例如播放声音

```js
window.ankiEcoExtCMHooks = {
  onFlipCard: () => {
    console.log('play sound or sth');
  },
};
```

<!--@include: @/parts/feedback-zh.md -->
