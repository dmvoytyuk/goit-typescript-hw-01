type UserX = {
	name: string;
	surname: string;
	email: string;
	password: string;
};

function createOrUpdateUser(initialValues: Partial<UserX>) {
	// Оновлення користувача
}

createOrUpdateUser({
	email: "user@mail.com",
	password: "password123",
});
