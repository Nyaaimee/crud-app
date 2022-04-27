<template>
    <h1>Santa Lucia</h1>
  <div class="container">
      <button @click="this.$router.push('/add-product')" class="bnt-1">Add Item</button>
      <input type="search" placeholder="Search a product">
  </div>
  <div class="list">
      <span>Product Name</span>
      <span>Action</span>
  </div>
  <div class="btns">          
      <span id="item">Product</span>
      <span @click="this.$router.push('/view-product/'+ product?.id)" id="btn1">View</span>
      <span @click="this.$router.push('/update-product/' + product?.id)" id="btn2">Update</span>
      <span @click="deleteProduct(product?.id)" id="btn3">Delete</span>
    </div>
</template>

<script>
export default ({
   name : 'Home-vue',
   data(){
       return{
         Product:[
             
         ]
       }
   }
})
</script>

<style>
h1{
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.container{
    display: flex;
    justify-content: center; 
    justify-content: space-evenly;
}
.bnt-1{
    background-color: seagreen;
    font-size: 16px;
    color: white;
    padding: 12px;
    border-radius: 5px;
    cursor: pointer;
}
input{
    font-size: 16px;
}
.btns{
    display: flex;
    justify-content: flex-end;
    margin-top: 3rem;
    padding: 10px;
    background-color: rgb(115, 233, 166);
}
#btn1{
    margin: 2px;
    padding: 10px;
    border-radius: 6px;
    font-size: 15px;
     color: white;
    background-color: tomato;
    cursor: pointer;
}
.item{
    font-size: 20px;
    font-family: 'Times New Roman';
    color: black;
    margin-left: 2px ;
    justify-content: flex-start;
}
#btn2{
    margin: 2px;
    padding: 10px;
    border-radius: 6px;
    font-size: 15px;
    color: white;
    background-color: cornflowerblue;
    cursor: pointer;
}
#btn3{
    margin: 2px;
    padding: 10px;
    border-radius: 6px;
    font-size: 15px;
    color: white;
    background-color: seagreen;
    cursor: pointer;
}
.list{
    display: flex;
    justify-content: space-between;
    background-color: seagreen;
    color: white;
    font-size: 20px;
    padding: 20px;
    margin-top: 5rem;
    font-family: 'Times New Roman';
}
</style>
     