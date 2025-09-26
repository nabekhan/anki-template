<script setup lang="ts">
const dist = EXT_CM;
const fieldExpr = (name: string) => `{{${name}}}`
const infoStr = 'data-doc="https://anki.ikkz.fun/"';

</script>

::: code-group

```html-vue{4} [Front Template]
<div class="ae-anim-container" {{infoStr}}>
  <div class="ae-anim-card">
    <div class="ae-card-face">
      {{ fieldExpr('Front') }}
    </div>
  </div>
</div>

<script>
{{dist.script}}</script>
```

```html-vue{5-7} [Back Template]
<div id="anki-eco-back-indicator"></div>
<div class="ae-anim-container" {{infoStr}}>
  <div class="ae-anim-card">
    <div class="ae-card-face">
      {{ fieldExpr('Back') }}
      <hr id="answer" />
      {{ fieldExpr('Front') }}
    </div>
  </div>
</div>

<script>
{{dist.script}}</script>
```

```css-vue [Styling]
{{dist.css}}
```

:::
