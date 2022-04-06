<template>
  <div class="FieldSearch" :class="$attrs.class">
    <input
      @input="handlerInput($event)"
      :id="$attrs.id"
      :value="modelValue"
      maxlength="100"
      type="text"
      class="input-global FieldSearch__input"
    />
    <button
      class="button-global FieldSearch__btnClear"
      name="clear"
      @click="handlerClear"
      v-show="modelValue"
    >
      <svg class="FieldSearch__icon">
        <use xlink:href="@/assets/sprite.svg#close"></use>
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  inheritAttrs: false,
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  methods: {
    handlerInput(e: { target: HTMLInputElement }) {
      this.$emit("update:modelValue", e.target.value);
    },
    handlerClear() {
      this.$emit("update:modelValue", "");
    }
  },
  created() {
    console.log(this.$attrs)
  }
});
</script>

<style lang="scss" scoped>
.FieldSearch {
  background: white;
  border-radius: 8px;

  display: flex;
  height: 40px;

  overflow: hidden;
  position: sticky;
  top: 0;

  &__input {
    padding: 12px 40px 12px 16px;
    display: block;
    width: 100%;

    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
  }

  &__btnClear {
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }

  &__btnClear {
    width: 24px;
    height: 24px;

    position: absolute;
    top: 50%;
    right: 10px;
    background: none;
    transform: translateY(-50%);
  }

  &__icon {
    width: 32px;
    height: 32px;
  }
}
</style>
