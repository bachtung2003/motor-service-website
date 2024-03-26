<template>
  <div id="container">
    <div class="in4_Board">
      <div class="topic">BASIC INFORMATION</div>
      <div class="body">
        <table>
          <tr>
            <td style="width: 500px">Full Name: Paul</td>
            <td>Country: Vietnam</td>
          </tr>
          <tr>
            <td>Date Of Birth: 20/4/2003</td>
            <td>ZIP Code: 73000</td>
          </tr>
          <tr>
            <td>Address: International University</td>
            <td><a href="#">Update Basic Information</a></td>
          </tr>
        </table>
      </div>
    </div>

    <div class="in4_Contact">
      <div class="topic">CONTACT INFO</div>
      <div class="body">
        <table>
          <tr>
            <td style="width: 500px">Email address: thanhtrollvn@gmail.com</td>
            <td>Phone number: 0916736398</td>
          </tr>
          <tr>
            <td>Status: Verified</td>
            <td><a href="#">Change my phone number</a></td>
          </tr>
          <tr>
            <td><a href="#">Update Basic Information</a></td>
          </tr>
        </table>
      </div>
    </div>

    <div class="body" style="border-radius: 10px" >
      <a href="#">Delete my account</a>
    </div>
  </div>
</template>

<script>
export default {
  // Add your script here if needed
}
</script>

<style scoped>
#container {
  display: block;
  background-color: white;
  padding-right: 40px;
}

table {
  border-radius: 20px; /* Set border-radius to 20px */
}

.th,
td {
  text-align: left;
  padding: 8px;
}

.in4_Board {
  padding-bottom: 20px;
}

.in4_Contact {
  padding-top: 10px;
  padding-bottom: 20px;
}

.body {
  padding: 15px;
  padding-left: 25px;
  background-color: lightgray;
  color: black;
  border-bottom-left-radius: 10px; /* Rounded top-left corner */
  border-bottom-right-radius: 10px; /* Rounded top-right corner */
  font-size: 20px;
}

.topic {
  padding: 10px;
  padding-left: 30px;
  background-color: #4D4D4D;
  color: white;
  font-size: 30px;
  font-weight: 600;
  border-top-left-radius: 20px; /* Rounded top-left corner */
  border-top-right-radius: 20px; /* Rounded top-right corner */
}

a {
  text-decoration: underline; /* Underline links */
  color: black; /* Set color to black */
}
</style>
