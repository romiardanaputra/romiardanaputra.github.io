var users = localStorage.getItem('romidb');
$(document).ready(function () {
	users = JSON.parse(users); // Convert String as an Object
	if (users === null)
		// If there is nothing intialize
		users = [];

	listRegistrants();
});

function listRegistrants() {
	var users = localStorage.getItem('romidb');
	users = JSON.parse(users); // Convert String as an Object
	if (users === null)
		// If there is nothing intialize
		users = [];

	$('#tbl-list').html('');
	$('#tbl-list').html(
		`<thead>
			<tr>
				<th>First Name</th>
				<th>Middle Name</th>
				<th>Last Name</th>
				<th>User Gender</th>
				<th>User Email</th>
				<th>User Password</th>
				<th>User Course</th>
				<th>Edit</th>
				<th>Delete</th>
			</tr>
		</thead>
		<tbody></tbody>
		`
	);

	for (var user in users) {
		var registrant = JSON.parse(users[user]);

		$('#tbl-list tbody').append(
			`<tr>
					<td>${registrant.firstName}</td>
					<td>${registrant.middleName}</td>
					<td>${registrant.lastName}</td>
					<td>${registrant.gender}</td>
					<td>${registrant.email}</td>
					<td>${registrant.password}</td>
					<td>${registrant.course}</td>
					<td><button class="btnEdit">Edit</button></td>
					<td><button class="btnDel">Delete</button> </td>
			</tr>`
		);
	}
}

$('.btnEdit').bind('click', function () {
	var registrant;

	for (var user in users) {
		registrant = JSON.parse(users[user]);
		if (registrant) {
			selected_index = parseInt($(this).attr('alt').replace('Edit', ''));
		}

		var registrant = JSON.parse(users[selected_index - 1]);

		$('#firstName').val(registrant.firstName);
		$('#middleName').val(registrant.middleName);
		$('#lastName').val(registrant.lastName);
		$('#gender').val(registrant.gender);
		$('#email').val(registrant.email);
		$('#pwd').val(registrant.password);
		$('#course').val(registrant.course);
		$('#user_name').attr('readonly', 'readonly');
		$('#email').focus();
	}
});

