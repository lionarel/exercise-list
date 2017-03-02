Polymer
	is: 'exercise-list'


	attached: ( ) ->
		
	properties:
		exercises:
			type: Array,
			value: [ ]

	add: ( event ) ->
		$ this
			.trigger 'describe-exercise'				
		