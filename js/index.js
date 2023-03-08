const today = new Date()

const thisYear = today.getFullYear()

let footer = document.querySelector('#footer')

let copyright = document.createElement('p')

copyright.innerHTML = "James Kyan " + '&#169;' + thisYear


document.body.appendChild(copyright)

const skills = ["team collaboration", "leadership", "problem solver"]

const skillsSection = document.getElementById('skills')

skillsList = skillsSection.querySelector('ul')

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li')
    skill.innerText = skills[i]
    skillsList.appendChild(skill)
}

const messageForm = document.querySelector('leave_message')

messageForm.addEventListener('submit', (e) => {
    const name = e.target.name
    const email = e.target.email
    const message = e.target.message
    console.log(name, email, message)

});