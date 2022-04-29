// create a user that only have access to db website01
db.createUser({
		user: "website01",
		pwd: "eLow8yBSp34wXx",
		roles: ["readWrite", "dbAdmin"]
	});

// create two new user documents as variables
db.createCollection("users");
// password sha256: "abc"
var u1 = db.users.insertOne({name:"admin", password: "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"});
var u2 = db.users.insertOne({name:"chwa", password: "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"});

// create three new post documents with reference to u1 and u2
db.createCollection("posts");
db.posts.insertOne({title:"Test 1", content: "<p>Content 1</p>", user_id: u1.insertedId});
db.posts.insertOne({title:"Test 2", content: "<p>Content 2</p>", user_id: u1.insertedId});
db.posts.insertOne({title:"Test 3", content: "<p>Content 3</p>", user_id: u2.insertedId});