<template>
  <div>
    <BaseTabsMovie :tabs-info="tabsToDisplay">
      <div>ldsmlqdsm ldsmql sdpoez poaze </div>
    </BaseTabsMovie>
  </div>
  <!-- ajout qqes chose en haut? -->
  <ElTabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <ElTabPane v-for="(el, index) in tabsToDisplay" :key="index" :label="el.name" :name="el.name">
      {{ el.name }} 
    </ElTabPane>
  </ElTabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import BaseTabsMovie from '@/components/BaseTabsMovie.vue'
import type { TabsPaneContext } from 'element-plus'
import { ElTabs, ElTabPane } from 'element-plus'
import { TGenre } from '@/types/movies';
import { genreInApp } from '@/enum.json'

const activeName = ref<string>('first')

const tabsToDisplay = ref<TGenre[]>(genreInApp)

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
