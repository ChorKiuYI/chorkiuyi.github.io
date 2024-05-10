---
title: 组织架构图（echarts实现）
icon: circle-info
---

情景：权限平台管理子系统中的机构管理模块中，某个tab标签分页需要展示对应机构部门的组织架构图（也就是以你选择的机构为顶层的组织架构图）

ecahrts
vue-orgchart

echarts更为灵活，而且该系统已经引入了echarts，直接使用echarts的组织架构图模式即可


后续发现先残留的问题
更新权限噶你要叫他们把echarts版本换成5.0.0，不然机构的组织架构图展开缩起会有线残留

```js
npm uninstall echarts
npm install echarts@5.0.0 --save
```
