const translations  = {
    "title": {
        "en": "Docker 🐋" ,
        "pt": "Docker 🐋"
    },
    "virtualization-title": {
        "en": "Virtualization",
        "pt": "Virtualização"
    },
    "virtualization-text": {
        "en": "Let's suppose you have a company that wants to run multiple applications on a physical server. <br> \
        However, some of these applications require different operating systems or different software versions.\
        In this case, virtualization can be used to create multiple virtual machines on the same physical server.\
        Each virtual machine has the necessary operating system for each application, along with the software configuration.\
        <br><br>\
        Virtualization allows the company to efficiently use the resources of the physical server while maintaining application separation, which prevents conflicts and simplifies management.",
        "pt": "Suponhamos que tens uma companhia que quer correr múltiplas aplicações num servidor físico. <br>\
        No entanto, algumas dessas aplicações requerem sistemas operativos diferentes ou diferentes versões de software.\
        Neste caso a virtualização pode ser usada parar criar múltiplas máquinas virtuais no mesmo servidor físico. \
        Cada uma com o sistema operativo necessário para cada aplicação em conjunto com a configuração do software. \
        <br><br>\
        A virtualização permite à companhia usar eficientemente os recursos do servidor físico mantendo separação \
        de aplicações o que previne conflitos e simplifica gestão. \
        Sem virtualização a companhia teria de comprar ou manter servidores físicos separados.",
    },
    "docker-virtualization-title": {
        "en": "Docker vs Virtualization",
        "pt": "Docker vs Virtualização"
    },
    "docker-virtualization-text": {
        "en": "Docker is a technology that is lighter than virtualization. \
        If the applications you need to run all work on the same operating system \
        and only have different dependencies (e.g., one requires pyodbc 3.0.0 and another requires pyodbc 4.0.39), \
        then it's better to use Docker. \
        This way, I save myself from creating multiple virtual machines, each with its own OS! \
        Not to mention that, logically, deploying a Docker container is much faster than a virtual machine.",
        "pt": "O Docker é uma tecnologia mais leve que a virtualização. \
        Se as aplicações que necessitar de correr funcionarem todas no mesmo sistema operativo \
        e tiverem apenas dependências diferentes (ex: uma necessita do pyodbc 3.0.0 e outra do pyodbc 4.0.39) \
        então mais vale usar o Docker.  \
        Assim poupo ter de criar várias máquinas virtuais, cada uma com o seu OS! \
        Já para não falar que logicamente, fazer deploy de um container do Docker é muito mais rápido que uma máquina virtual."
    },
    "useful-links": {
        "en": "Useful links",
        "pt": "Links úteis"
    }
}

export default translations;