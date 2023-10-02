<template>
  <ElTabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <ElTabPane v-for="(tab, index) in props.tabsInfo" :key="index" :label="tab.name" :name="tab.name">
      {{ tab.name }} 
      <slot />
    </ElTabPane>
  </ElTabs>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'
import { ElTabs, ElTabPane } from 'element-plus'
import type { TabsPaneContext } from 'element-plus'
import { TGenre } from '@/types/movies';

interface IProps {
  tabsInfo: TGenre[];
}

const props = defineProps<IProps>()

const activeName = ref<string>(props.tabsInfo[0].name)

//dans props type TGenre

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
