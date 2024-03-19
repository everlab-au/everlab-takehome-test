<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const  props = useRoute()
const id = props.params.id;
const result = props.params.result;
const { data, pending, error } =  useFetch(`/api/result/${id}`)

console.log(data)
useHeadSafe({ title:"HLops - Patient result"})
const  filterData = computed(() => {
  if (data) {
    const output = data.value?.data?.map((test) => {
    return  data.value?.output.filter((item) => {
        if (item.diagnostic_metric.oruSonicCodes === test.test) {
          return { ...test, diagnostic_metric: item.diagnostic_metric }
        }
      })
    }).flat().filter((item) => item?.results?.referenceRange !== "") 
    return output
  }
})

const get_range = (value: string | null |  undefined, lower: number | undefined, higher: number |undefined , range: number) => {
function categorizeValue(value: number, rangeStart: number, rangeEnd: number, thresholdPercentage: number): string {
    // Normalize the value to a 0-1 scale
    let normalizedValue = (value - rangeStart) / (rangeEnd - rangeStart) * -1;
    if (normalizedValue < 0) {
      normalizedValue = normalizedValue * -1
    }
    // Convert thresholdPercentage into a decimal
    const threshold = thresholdPercentage / 100;
    if (normalizedValue <= threshold) {
    
        return 'low';
    } else if (normalizedValue >= 1 - threshold) {
        return 'high';
    } else {
        return 'normal';
    }
}
  if ( value  == undefined || lower == undefined || higher == undefined) {
    return 'invalid';
  }


  let val = value?.split("<^").length > 1 ?   value?.split("<^")[1] :  value?.split("<^")[0]
  const input = parseInt(val)
   return categorizeValue(input, lower, higher, range) 
}

const  filterResult = computed(() => {
  if (data) {
    console.log(data)
    return data.value?.output
  }
})
</script>
<template>
      <div>
    <div class="flex items-center justify-left pl-2 font-mono from-neutral-950 text-3xl h-12 bg-[#61A3BC]">
     <NuxtLink :to="`/`">patient=> </NuxtLink>result</div>
<Table>
    <TableHeader>
      <TableRow>
        <TableHead class="">
          test ID
        </TableHead>
        <TableHead class=""> Test name </TableHead>
        <TableHead class="text-left "> Value</TableHead>
        <TableHead class="text-center"> reference::everlab </TableHead>
        <TableHead class="text-center"> Reference Range </TableHead>
        <TableHead class="text-center"> Everlab Range </TableHead>
      </TableRow>
    </TableHeader>
<div v-if="pending"></div>
<div v-else-if="error">Error: {{ error }}</div>
    <TableBody v-else>
      <TableRow   v-if="data" v-for="test in  filterData">
        <TableCell class="font-medium" >
          {{ test?.results.id }}
        </TableCell>
          <TableCell >
             {{ test?.results.test }}
            </TableCell>
        <TableCell class=" text-left">
          {{ test?.results.value}}
        </TableCell>
         <TableCell class="text-center">
           {{ get_range(test?.results.value, test?.diagnostic_metric.standardLower, test?.diagnostic_metric.standardHigher, 30) }} ::
           
            {{ get_range(test?.results.value, test?.diagnostic_metric.everlabLower, test?.diagnostic_metric.everlabHigher, 30) }}
        </TableCell>
          <TableCell class="text-center">
          {{ test?.results.referenceRange}}
        </TableCell>
          <TableCell class="text-center">
          {{ test?.diagnostic_metric.everlabLower }}-{{ test?.diagnostic_metric.everlabHigher}}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
      </div>      
</template>