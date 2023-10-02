<template>
  <ElTabs v-model="activeTab" @tab-click="handleClick">
    <div class="flex justify-center">
      <ElTabPane v-for="(tab, index) in props.tabsInfo" :key="index" :label="tab.name" :name="tab.id">
        <slot />
      </ElTabPane>
    </div>
  </ElTabs>
</template>

<script lang="ts" setup>
import { ref, defineProps, onMounted, defineEmits } from 'vue'
import { ElTabs, ElTabPane } from 'element-plus'
import type { TabsPaneContext } from 'element-plus'
import { TGenre } from '@/types/movies';

interface IProps {
  tabsInfo: TGenre[];
}

const props = defineProps<IProps>()
const emit = defineEmits(['changeTab'])

const activeTab = ref<number>(props.tabsInfo[0].id)

onMounted(() => {
  emit('changeTab', activeTab.value.toString())
})

const handleClick = (tab: TabsPaneContext) => {
  emit('changeTab', tab.paneName?.toString())
}
</script>
