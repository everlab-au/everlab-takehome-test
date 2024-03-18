<script setup lang="ts">

  type  Patient = { name : String,dob,String,patientID:String} 


  defineProps({ patiens:Array<Patient>,    });

</script>
<template>
  <TableRow>
    <TableCell class="font-medium">
      INV001
    </TableCell>
    <TableCell> </TableCell>
    <TableCell>Credit Card</TableCell>
    <TableCell>Credit Card</TableCell>
    <TableCell>
      $250.00
    </TableCell>

  </TableRow>
</template>

