<template>
  <div class="card col-sm-12">
    <div class="card-body">
      <div class="heading">
        <h5 class="heading-text">Master User</h5>
      </div>
     <table
      id="exampleTable"
      class="table table-striped table-bordered"
      style="width: 100%"
    >
      <thead>
        <tr>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
    </table>
    </div>
  </div>
</template>

<script>
import "datatables.net-bs5";
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from "jquery";
import axios from "axios";
export default {
  name: "MasterUser",
  mounted() {
    axios.get("https://reqres.in/api/users").then((response) => {

      $("#exampleTable").DataTable({
        data: response.data.data,
        columns: [
            { data: "email" },
            { data: "first_name" },
            { data: "last_name" },
        ],
        });
    });
  },
};
</script>

<style scoped>
@import 'datatables.net-dt';
@import 'datatables.net-responsive-dt';

.heading {
  background: #545a65;
  margin-bottom: 20px;
}

.heading-text {
  height: 50px;
  text-align: center;
  padding-top: 15px;
  color: white;
}
</style>

