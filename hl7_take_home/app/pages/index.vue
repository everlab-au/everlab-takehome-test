<script setup lang="ts">
import { ref } from 'vue'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useFileDialog } from '@vueuse/core'

import {Eye,User, UploadCloudIcon, Trash2 } from "lucide-vue-next"
import { ConsoleLogWriter } from 'drizzle-orm';

const  isValidFile = ref(true)
const  Submitable = ref(false)
const { files, open, reset, onChange } = useFileDialog({
  accept: "*.oru.txt", // Set to accept only image files
  directory: false, // Select directories instead of files if set true
})
function CurlMock() {
  const { data, pending, error,refresh } = useFetch('/api/mock');
  return { data, pending, error,refresh }
}
onChange((files) => {
   //determine if the file end by .oru
  if (files?.item(0)?.name?.endsWith(".oru.txt") && files?.length >= 1) {

      isValidFile.value = true
      Submitable.value = true
    console.log(files.length,"clean")
  }
  else if (files?.length >= 1){
    console.log(files?.length," not clean")
    isValidFile.value = false
      Submitable.value = false
  }


})
function selectUser(user: string) {
const encoded =  encodeURIComponent(user)
  return`/patient/${encoded}`
}
type PatientInfo = {
  name: {
        name: string;
        middleName: string;
        degree: string;
    };
    dob: string;
    patientID: string;
}
function selectUserWithTest(user: number| undefined , test: string | null | undefined) {
  if (user === undefined || test === null) {
    return ""
  }
  if (test === undefined) {
    return ""
  }
  const encodedUser =  encodeURIComponent(user)
  const encodedTest =  encodeURIComponent(test)
  return `/patient/${encodedUser}/result/${encodedTest}`
}
function upload_result() {
  return $fetch("/api/upload", {
    method: "POST",
    body: files.value?.item(0)

  }).then((e) => {
    if (e) {
      reset()
      refresh()
    }
     
  }

  )
  
}
function delete_result() {
  return $fetch("/api/delete", {
    method: "DELETE",
  }).then((e) => {
    if (e) {
      refresh()
    }
     
  }

  )
}



 useHeadSafe({ title:"HLops - Patients"})
const { data, pending, error,refresh } = CurlMock()
</script>
<template>
  <main class="">
    <div class="flex  gap-3 items-center justify-start pl-2    font-mono  from-neutral-950 text-3xl  h-12 bg-[#61A3BC]">


<div @click="open" class=" cursor-pointer flex flex-row items-center gap-1" >
    <UploadCloudIcon size="30"    />
    <h1 v-if="isValidFile" class="text-sm">  {{ files?.item(0)?.name }}</h1>
    <h1 v-else class="text-sm">invalid file</h1>
</div>

<button @click="delete_result" class="cursor-pointer">
    <Trash2 size="30"></Trash2 >
</button>
  <button v-if="Submitable" class="bg-[#61A3BC] text-black  text-md px-3 py-1 rounded-md" @click="upload_result">Upload</button>
      patient=>list

    </div>
    <div  v-if="error" class="flex items-center justify-center pl-2 font-mono from-neutral-950 text-3xl h-10 bg-[#61A3BC]"> erorring :((</div>
<Table v-if="!error">
    <TableHeader  >
      <TableRow>
        <TableHead class="w-[100px]">
          Patient ID
        </TableHead>
        <TableHead class=" text-center">Patient Name </TableHead>
        <TableHead class="text-left" >Test Ordered</TableHead>
        <TableHead class="text-left" >Observation date </TableHead>
      </TableRow>
    </TableHeader>
    <div v-if="pending"></div>
    <TableBody v-else>
      <TableRow   v-for="user in data?.data" :key="user.patient.patientID">
        <TableCell class="font-medium">
          {{ user.patient.patientID }}
        </TableCell>
          <TableCell class=" text-center"> 
          <NuxtLink  class=" cursor-pointer flex  justify-center   gap-3" :to="selectUser(user.patient.patientID)">
        <User></User>
               {{ user.patient.name}}
          </NuxtLink>
            </TableCell>
        <TableCell    class="  text-left flex flex-row">
          <NuxtLink class=" cursor-pointer flex flex-row gap-3 " :to="selectUserWithTest( user.order_info?.id, user.order_info?.testOrdered)"> 
        <Eye></Eye>
          {{user.order_info?.testOrdered }}
          </NuxtLink>
        </TableCell>
        <TableCell class="font-medium">
          {{ user.order_info?.observationDateTime }}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
  </main>
</template>
<style scoped>
</style>