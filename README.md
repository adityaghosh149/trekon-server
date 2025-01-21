### API Documentation

#### 1. Get Locations

##### Endpoint: `GET /locations/`

**Description:** Fetches a list of available trek locations.

-   **Response:**
    -   **Status Code:** 200 OK
    -   **Body:**
        ```json
        [
        	{
        		"key": "1",
        		"label": "Hampta Pass"
        	}
        ]
        ```

---

#### 2. Get Treks

##### Endpoint: `GET /api/treks`

**Description:** Retrieves a list of all treks available on the platform.

-   **Response:**
    -   **Status Code:** 200 OK
    -   **Body:**
        ```json
        [
        	{
        		"id": "1",
        		"title": "Hampta Pass Trek",
        		"location": "Hampta Pass",
        		"duration": "7",
        		"groupSizeMin": "4",
        		"groupSizeMax": "8",
        		"difficulty": "Medium",
        		"startDate": "2025-03-15",
        		"endDate": "2025-03-22",
        		"price": "8000",
        		"image": "https://example.com/hampta-pass.jpg",
        		"sherpa": {
        			"name": "Karma Sherpa",
        			"avatar": "https://example.com/sherpa-avatar.jpg",
        			"experience": "8 years of guiding treks in Himachal Pradesh"
        		},
        		"isSponsored": true
        	}
        ]
        ```

---

#### 3. Get Featured Treks

##### Endpoint: `GET /api/treks/featured-treks`

**Description:** Fetches a list of featured treks on the platform.

-   **Response:**
    -   **Status Code:** 200 OK
    -   **Body:**
        ```json
        [
        	{
        		"id": "1",
        		"title": "Hampta Pass Trek",
        		"location": "Hampta Pass",
        		"duration": "7",
        		"groupSizeMin": "4",
        		"groupSizeMax": "8",
        		"difficulty": "Medium",
        		"startDate": "2025-03-15",
        		"endDate": "2025-03-22",
        		"price": "8000",
        		"image": "https://example.com/hampta-pass.jpg",
        		"sherpa": {
        			"name": "Karma Sherpa",
        			"avatar": "https://example.com/sherpa-avatar.jpg",
        			"experience": "8 years of guiding treks in Himachal Pradesh"
        		},
        		"isSponsored": true
        	}
        ]
        ```

---

#### 4. Get Trek Details

##### Endpoint: `GET /api/trek-details/:id`

**Description:** Retrieves detailed information about a specific trek by its ID.

-   **Response:**

    -   **Status Code:** 200 OK
    -   **Body:**

        ```json
        {
        	"id": "1",
        	"title": "Hampta Pass Trek",
        	"description": "A thrilling trek that takes you through lush green valleys, alpine forests, and rocky terrains, leading you to the breathtaking Hampta Pass.",
        	"duration": "7",
        	"availableSlots": "10",
        	"groupSize": "4-8",
        	"difficulty": "Medium",
        	"startingPoint": "Manali, Himachal Pradesh",
        	"bookingDeadline": "2025-03-10",
        	"price": "8000",
        	"coverImage": "https://example.com/hampta-pass.jpg",
        	"trekDays": [
        		{
        			"title": "Day 1-2: Arrival in Manali and Drive to Jobra, Trek to Chika",
        			"description": "Arrive in Manali, take a scenic drive to Jobra, and start the trek to Chika, with stunning views of the surrounding mountains.",
        			"icon": "bus"
        		},
        		{
        			"title": "Day 3-4: Trek to Balu ka Ghera",
        			"description": "Trek to Balu ka Ghera, crossing streams and walking through lush meadows. The views of snow-capped peaks are incredible along the way.",
        			"icon": "hiking"
        		},
        		{
        			"title": "Day 5: Summit Hampta Pass and Trek to Shea Goru",
        			"description": "Summit the Hampta Pass, and descend towards Shea Goru, with spectacular panoramic views of the valleys and snow-capped peaks.",
        			"icon": "summit"
        		},
        		{
        			"title": "Day 6-7: Trek to Chandratal and Drive to Manali",
        			"description": "Trek towards Chandratal, a high-altitude lake, and then drive back to Manali, concluding the trek.",
        			"icon": "lake"
        		}
        	],
        	"sherpa": {
        		"name": "Karma Sherpa",
        		"avatar": "https://example.com/sherpa-avatar.jpg",
        		"experience": "8 years of guiding treks in Himachal Pradesh",
        		"certifications": [
        			"Certified Trekking Guide",
        			"First Aid Certified"
        		]
        	}
        }
        ```

---

#### 5. Search Treks

##### Endpoint: `GET /api/search-treks`

**Description:** Searches for treks based on filters or search criteria.

-   **Response:**
    -   **Status Code:** 200 OK
    -   **Body:**
        ```json
        [
        	{
        		"id": "1",
        		"title": "Hampta Pass Trek",
        		"location": "Hampta Pass",
        		"duration": "7",
        		"groupSizeMin": "4",
        		"groupSizeMax": "8",
        		"difficulty": "Medium",
        		"startDate": "2025-03-15",
        		"endDate": "2025-03-22",
        		"price": "8000",
        		"image": "https://example.com/hampta-pass.jpg",
        		"sherpa": {
        			"name": "Karma Sherpa",
        			"avatar": "https://example.com/sherpa-avatar.jpg",
        			"experience": "8 years of guiding treks in Himachal Pradesh"
        		},
        		"isSponsored": true
        	}
        ]
        ```
