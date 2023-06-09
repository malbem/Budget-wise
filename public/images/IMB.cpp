#include <stdio.h>
#include <stdlib.h>
#include <Windows.h>
#include <locale.h>
#include <conio.h>
#include <time.h>
#include <string.h>
#include <stdbool.h>

#define ENTER 13
#define BACKSPACE 8
#define MAX_IMOVEIS 100

// Variáveis de Menu
int op1 = 0;
int op2 = 0;
int op3 = 0;
int qtdImV = 0;
int qtdImVen=0;
int i=0;

// Variáveis de Load
int load;

// Variáveis da Animação
bool ani = true;

const char* loadMessages[] = {
    " 1%%|",
    " 10%| ###",
    " 35%| #########",
    " 72%| #####################",
    " 99%| ###########################"
};

// Variáveis do Menu
clock_t start = clock();
int selectedItem = 0;
static int proximoId = 1;

typedef struct {
    char endereco[100];
    float valor;
    float area;
    int quartos;
    int banheiros;
    int vagas_garagem;
    char status[15];
} Imovel;


Imovel imoveisV[MAX_IMOVEIS]; 


int main(){
	
	system("color A");
	
	bool exitMenu = false;
	
	SetConsoleOutputCP(CP_UTF8);
	
	//Animação	
	while(!ani){
		i++;
			system("color A");
			
			load =i;
			
			//1
			if (load >= 0 && load <= 4) {
		        if (load == 0) {
		            printf("CARREGANDO:    1%%| ");
		        } else {
		            printf("CARREGANDO: %s", loadMessages[load]);
		        }
	    	}
			printf("\n\n\n\n\n\n\n\n");
			printf("\t\t                                                 /\\\n");
			printf("\t\t                                                /  \\  /\\\n");
			printf("\t\t                    ________[_]________      /\\/    \\/  \\\n");
			printf("\t\t           /\\      /\\        ______    \\    /   /\\/\\  /\\/\\\n");
			printf("\t\t          /  \\    //_\\       \\    /\\    \\  /\\/\\/    \\/    \\\n");
			printf("\t\t   /\\    / /\\/\\  //___\\       \\__/  \\    \\/\n");
			printf("\t\t  /  \\  /\\/    \\//_____\\       \\ |[]|     \\\n");
			printf("\t\t /\\/\\/\\/       //_______\\       \\|__|      \\\n");
			printf("\t\t/      \\      /XXXXXXXXXX\\                  \\\n");
			printf("\t\t        \\    /_I_II  I__I_\\__________________\\\n");
			printf("\t\t               I_I|  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I_II  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I II__I  I     XXXXXXX     I\n");
			printf("\t\t               ~~~~~"   "~~~~~~~~~~~~~~~~~~~~~~~~\n");
			Sleep(100);
			system("cls");
			
			
			//2
			if (load >= 0 && load <= 4) {
		        if (load == 0) {
		            printf("CARREGANDO:    1%%| ");
		        } else {
		            printf("CARREGANDO: %s", loadMessages[load]);
		        }
	    	}
			printf("\n\n\n\n\n\n\n\n");
			printf("\t\t                                                 /\\\n");
			printf("\t\t                            (_)                 /  \\  /\\\n");
			printf("\t\t                    ________[_]________      /\\/    \\/  \\\n");
			printf("\t\t           /\\      /\\        ______    \\    /   /\\/\\  /\\/\\\n");
			printf("\t\t          /  \\    //_\\       \\    /\\    \\  /\\/\\/    \\/    \\\n");
			printf("\t\t   /\\    / /\\/\\  //___\\       \\__/  \\    \\/\n");
			printf("\t\t  /  \\  /\\/    \\//_____\\       \\ |[]|     \\\n");
			printf("\t\t /\\/\\/\\/       //_______\\       \\|__|      \\\n");
			printf("\t\t/      \\      /XXXXXXXXXX\\                  \\\n");
			printf("\t\t        \\    /_I_II  I__I_\\__________________\\\n");
			printf("\t\t               I_I|  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I_II  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I II__I  I     XXXXXXX     I\n");
			printf("\t\t               ~~~~~"   "~~~~~~~~~~~~~~~~~~~~~~~~\n");	
			Sleep(100);
			system("cls");
			
			
			//3
			if (load >= 0 && load <= 4) {
		        if (load == 0) {
		            printf("CARREGANDO:    1%%| ");
		        } else {
		            printf("CARREGANDO: %s", loadMessages[load]);
		        }
	    	}
			printf("\n\n\n\n\n\n\n\n");
			printf("\t\t                           (  (                  /\\\n");
			printf("\t\t                            (_)                 /  \\  /\\\n");
			printf("\t\t                    ________[_]________      /\\/    \\/  \\\n");
			printf("\t\t           /\\      /\\        ______    \\    /   /\\/\\  /\\/\\\n");
			printf("\t\t          /  \\    //_\\       \\    /\\    \\  /\\/\\/    \\/    \\\n");
			printf("\t\t   /\\    / /\\/\\  //___\\       \\__/  \\    \\/\n");
			printf("\t\t  /  \\  /\\/    \\//_____\\       \\ |[]|     \\\n");
			printf("\t\t /\\/\\/\\/       //_______\\       \\|__|      \\\n");
			printf("\t\t/      \\      /XXXXXXXXXX\\                  \\\n");
			printf("\t\t        \\    /_I_II  I__I_\\__________________\\\n");
			printf("\t\t               I_I|  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I_II  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I II__I  I     XXXXXXX     I\n");
			printf("\t\t               ~~~~~"   "~~~~~~~~~~~~~~~~~~~~~~~~\n");	
			Sleep(125);
			system("cls");
	
			//4
			if (load >= 0 && load <= 4) {
		        if (load == 0) {
		            printf("CARREGANDO:    1%%| ");
		        } else {
		            printf("CARREGANDO: %s", loadMessages[load]);
		        }
	    	}
			printf("\n\n\n\n\n\n\n");
			printf("\t\t                            )  )\n");
			printf("\t\t                           (  (                  /\\\n");
			printf("\t\t                            (_)                 /  \\  /\\\n");
			printf("\t\t                    ________[_]________      /\\/    \\/  \\\n");
			printf("\t\t           /\\      /\\        ______    \\    /   /\\/\\  /\\/\\\n");
			printf("\t\t          /  \\    //_\\       \\    /\\    \\  /\\/\\/    \\/    \\\n");
			printf("\t\t   /\\    / /\\/\\  //___\\       \\__/  \\    \\/\n");
			printf("\t\t  /  \\  /\\/    \\//_____\\       \\ |[]|     \\\n");
			printf("\t\t /\\/\\/\\/       //_______\\       \\|__|      \\\n");
			printf("\t\t/      \\      /XXXXXXXXXX\\                  \\\n");
			printf("\t\t        \\    /_I_II  I__I_\\__________________\\\n");
			printf("\t\t               I_I|  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I_II  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I II__I  I     XXXXXXX     I\n");
			printf("\t\t               ~~~~~"   "~~~~~~~~~~~~~~~~~~~~~~~~\n");
			Sleep(125);
			system("cls");
			
			
			//5
			if (load >= 0 && load <= 4) {
		        if (load == 0) {
		            printf("CARREGANDO:    1%%| ");
		        } else {
		            printf("CARREGANDO: %s", loadMessages[load]);
		        }
	    	}
			printf("\n\n\n\n\n\n");
			printf("\t\t                           (    )\n");
			printf("\t\t                            )  )\n");
			printf("\t\t                           (  (                  /\\\n");
			printf("\t\t                            (_)                 /  \\  /\\\n");
			printf("\t\t                    ________[_]________      /\\/    \\/  \\\n");
			printf("\t\t           /\\      /\\        ______    \\    /   /\\/\\  /\\/\\\n");
			printf("\t\t          /  \\    //_\\       \\    /\\    \\  /\\/\\/    \\/    \\\n");
			printf("\t\t   /\\    / /\\/\\  //___\\       \\__/  \\    \\/\n");
			printf("\t\t  /  \\  /\\/    \\//_____\\       \\ |[]|     \\\n");
			printf("\t\t /\\/\\/\\/       //_______\\       \\|__|      \\\n");
			printf("\t\t/      \\      /XXXXXXXXXX\\                  \\\n");
			printf("\t\t        \\    /_I_II  I__I_\\__________________\\\n");
			printf("\t\t               I_I|  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I_II  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I II__I  I     XXXXXXX     I\n");
			printf("\t\t               ~~~~~"   "~~~~~~~~~~~~~~~~~~~~~~~~\n");
			Sleep(125);
			system("cls");
			
			
			//6
			if (load >= 0 && load <= 4) {
		        if (load == 0) {
		            printf("CARREGANDO:    1%%| ");
		        } else {
		            printf("CARREGANDO: %s", loadMessages[load]);
		        }
	    	}
			printf("\n\n\n\n\n");
			printf("\t\t                           (    )\n");
			printf("\t\t                           (    )\n");
			printf("\t\t                            )  )\n");
			printf("\t\t                           (  (                  /\\\n");
			printf("\t\t                            (_)                 /  \\  /\\\n");
			printf("\t\t                    ________[_]________      /\\/    \\/  \\\n");
			printf("\t\t           /\\      /\\        ______    \\    /   /\\/\\  /\\/\\\n");
			printf("\t\t          /  \\    //_\\       \\    /\\    \\  /\\/\\/    \\/    \\\n");
			printf("\t\t   /\\    / /\\/\\  //___\\       \\__/  \\    \\/\n");
			printf("\t\t  /  \\  /\\/    \\//_____\\       \\ |[]|     \\\n");
			printf("\t\t /\\/\\/\\/       //_______\\       \\|__|      \\\n");
			printf("\t\t/      \\      /XXXXXXXXXX\\                  \\\n");
			printf("\t\t        \\    /_I_II  I__I_\\__________________\\\n");
			printf("\t\t               I_I|  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I_II  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I II__I  I     XXXXXXX     I\n");
			printf("\t\t               ~~~~~"   "~~~~~~~~~~~~~~~~~~~~~~~~\n");
			Sleep(125);
			system("cls");
			
			
			//7
			if (load >= 0 && load <= 4) {
		        if (load == 0) {
		            printf("CARREGANDO:    1%%| ");
		        } else {
		            printf("CARREGANDO: %s", loadMessages[load]);
		        }
	    	}
			printf("\n\n\n\n");
			printf("\t\t                           (    )\n");
			printf("\t\t                           (    )\n");
			printf("\t\t                           (    )\n");
			printf("\t\t                            )  )\n");
			printf("\t\t                           (  (                  /\\\n");
			printf("\t\t                            (_)                 /  \\  /\\\n");
			printf("\t\t                    ________[_]________      /\\/    \\/  \\\n");
			printf("\t\t           /\\      /\\        ______    \\    /   /\\/\\  /\\/\\\n");
			printf("\t\t          /  \\    //_\\       \\    /\\    \\  /\\/\\/    \\/    \\\n");
			printf("\t\t   /\\    / /\\/\\  //___\\       \\__/  \\    \\/\n");
			printf("\t\t  /  \\  /\\/    \\//_____\\       \\ |[]|     \\\n");
			printf("\t\t /\\/\\/\\/       //_______\\       \\|__|      \\\n");
			printf("\t\t/      \\      /XXXXXXXXXX\\                  \\\n");
			printf("\t\t        \\    /_I_II  I__I_\\__________________\\\n");
			printf("\t\t               I_I|  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I_II  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I II__I  I     XXXXXXX     I\n");
			printf("\t\t               ~~~~~"   "~~~~~~~~~~~~~~~~~~~~~~~~\n");
			Sleep(125);
			system("cls");
			
			//8
			if (load >= 0 && load <= 4) {
		        if (load == 0) {
		            printf("CARREGANDO:    1%%| ");
		        } else {
		            printf("CARREGANDO: %s", loadMessages[load]);
		        }
	    	}
			printf("\n\n\n\t\t                           (   )\n");
			printf("\t\t                           (    )\n");
			printf("\t\t                           (    )\n");
			printf("\t\t                           (    )\n");
			printf("\t\t                            )  )\n");
			printf("\t\t                           (  (                  /\\\n");
			printf("\t\t                            (_)                 /  \\  /\\\n");
			printf("\t\t                    ________[_]________      /\\/    \\/  \\\n");
			printf("\t\t           /\\      /\\        ______    \\    /   /\\/\\  /\\/\\\n");
			printf("\t\t          /  \\    //_\\       \\    /\\    \\  /\\/\\/    \\/    \\\n");
			printf("\t\t   /\\    / /\\/\\  //___\\       \\__/  \\    \\/\n");
			printf("\t\t  /  \\  /\\/    \\//_____\\       \\ |[]|     \\\n");
			printf("\t\t /\\/\\/\\/       //_______\\       \\|__|      \\\n");
			printf("\t\t/      \\      /XXXXXXXXXX\\                  \\\n");
			printf("\t\t        \\    /_I_II  I__I_\\__________________\\\n");
			printf("\t\t               I_I|  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I_II  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I II__I  I     XXXXXXX     I\n");
			printf("\t\t               ~~~~~"   "~~~~~~~~~~~~~~~~~~~~~~~~\n");
			Sleep(125);
			system("cls");
			
			
			//9
			if (load >= 0 && load <= 4) {
		        if (load == 0) {
		            printf("CARREGANDO:    1%%| ");
		        } else {
		            printf("CARREGANDO: %s", loadMessages[load]);
		        }
	    	}
			printf("\n\n\n\t\t                           (   )\n");
			printf("\t\t                           (    )\n");
			printf("\t\t                           (    )\n");
			printf("\t\t                           (    )\n");
			printf("\t\t                            )  )\n");
			printf("\t\t                           (  (                  /\\\n");
			printf("\t\t                            (_)                 /  \\  /\\\n");
			printf("\t\t                    ________[_]________      /\\/    \\/  \\\n");
			printf("\t\t           /\\      /\\        ______    \\    /   /\\/\\  /\\/\\\n");
			printf("\t\t          /  \\    //_\\       \\    /\\    \\  /\\/\\/    \\/    \\\n");
			printf("\t\t   /\\    / /\\/\\  //___\\       \\__/  \\    \\/\n");
			printf("\t\t  /  \\  /\\/    \\//_____\\       \\ |[]|     \\\n");
			printf("\t\t /\\/\\/\\/       //_______\\       \\|__|      \\\n");
			printf("\t\t/      \\      /XXXXXXXXXX\\                  \\\n");
			printf("\t\t        \\    /_I_II  I__I_\\__________________\\\n");
			printf("\t\t               I_I|  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I_II  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I II__I  I     XXXXXXX     I\n");
			printf("\t\t               ~~~~~"   "~~~~~~~~~~~~~~~~~~~~~~~~\n");
			Sleep(250);
			system("cls");
			
			
			
			
			
			//R1
			if (load >= 0 && load <= 4) {
		        if (load == 0) {
		            printf("CARREGANDO:    1%%| ");
		        } else {
		            printf("CARREGANDO: %s", loadMessages[load]);
		        }
	    	}
			printf("\n\n\n\t\t                           (   )\n");
			printf("\t\t                           (    )\n");
			printf("\t\t                           (    )\n");
			printf("\t\t                           (    )\n");
			printf("\t\t                            )  )\n");
			printf("\t\t                           (  (                  /\\\n");
			printf("\t\t                                                /  \\  /\\\n");
			printf("\t\t                    ________[_]________      /\\/    \\/  \\\n");
			printf("\t\t           /\\      /\\        ______    \\    /   /\\/\\  /\\/\\\n");
			printf("\t\t          /  \\    //_\\       \\    /\\    \\  /\\/\\/    \\/    \\\n");
			printf("\t\t   /\\    / /\\/\\  //___\\       \\__/  \\    \\/\n");
			printf("\t\t  /  \\  /\\/    \\//_____\\       \\ |[]|     \\\n");
			printf("\t\t /\\/\\/\\/       //_______\\       \\|__|      \\\n");
			printf("\t\t/      \\      /XXXXXXXXXX\\                  \\\n");
			printf("\t\t        \\    /_I_II  I__I_\\__________________\\\n");
			printf("\t\t               I_I|  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I_II  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I II__I  I     XXXXXXX     I\n");
			printf("\t\t               ~~~~~"   "~~~~~~~~~~~~~~~~~~~~~~~~\n");
			Sleep(125);
			system("cls");
			
			//R2
			if (load >= 0 && load <= 4) {
		        if (load == 0) {
		            printf("CARREGANDO:    1%%| ");
		        } else {
		            printf("CARREGANDO: %s", loadMessages[load]);
		        }
	    	}
			printf("\n\n\n\t\t                           (   )\n");
			printf("\t\t                           (    )\n");
			printf("\t\t                           (    )\n");
			printf("\t\t                           (    )\n");
			printf("\t\t                            )  )\n");
			printf("\t\t                                                 /\\\n");
			printf("\t\t                                                /  \\  /\\\n");
			printf("\t\t                    ________[_]________      /\\/    \\/  \\\n");
			printf("\t\t           /\\      /\\        ______    \\    /   /\\/\\  /\\/\\\n");
			printf("\t\t          /  \\    //_\\       \\    /\\    \\  /\\/\\/    \\/    \\\n");
			printf("\t\t   /\\    / /\\/\\  //___\\       \\__/  \\    \\/\n");
			printf("\t\t  /  \\  /\\/    \\//_____\\       \\ |[]|     \\\n");
			printf("\t\t /\\/\\/\\/       //_______\\       \\|__|      \\\n");
			printf("\t\t/      \\      /XXXXXXXXXX\\                  \\\n");
			printf("\t\t        \\    /_I_II  I__I_\\__________________\\\n");
			printf("\t\t               I_I|  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I_II  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I II__I  I     XXXXXXX     I\n");
			printf("\t\t               ~~~~~"   "~~~~~~~~~~~~~~~~~~~~~~~~\n");
			Sleep(125);
			system("cls");
			
			
			//R3
			if (load >= 0 && load <= 4) {
		        if (load == 0) {
		            printf("CARREGANDO:    1%%| ");
		        } else {
		            printf("CARREGANDO: %s", loadMessages[load]);
		        }
	    	}
			printf("\n\n\n\t\t                           (   )\n");
			printf("\t\t                           (    )\n");
			printf("\t\t                           (    )\n");
			printf("\t\t                           (    )\n\n");
			printf("\t\t                                                 /\\\n");
			printf("\t\t                                                /  \\  /\\\n");
			printf("\t\t                    ________[_]________      /\\/    \\/  \\\n");
			printf("\t\t           /\\      /\\        ______    \\    /   /\\/\\  /\\/\\\n");
			printf("\t\t          /  \\    //_\\       \\    /\\    \\  /\\/\\/    \\/    \\\n");
			printf("\t\t   /\\    / /\\/\\  //___\\       \\__/  \\    \\/\n");
			printf("\t\t  /  \\  /\\/    \\//_____\\       \\ |[]|     \\\n");
			printf("\t\t /\\/\\/\\/       //_______\\       \\|__|      \\\n");
			printf("\t\t/      \\      /XXXXXXXXXX\\                  \\\n");
			printf("\t\t        \\    /_I_II  I__I_\\__________________\\\n");
			printf("\t\t               I_I|  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I_II  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I II__I  I     XXXXXXX     I\n");
			printf("\t\t               ~~~~~"   "~~~~~~~~~~~~~~~~~~~~~~~~\n");
			Sleep(125);
			system("cls");
			
			
			//R4
			if (load >= 0 && load <= 4) {
		        if (load == 0) {
		            printf("CARREGANDO:    1%%| ");
		        } else {
		            printf("CARREGANDO: %s", loadMessages[load]);
		        }
	    	}
			printf("\n\n\n\t\t                           (   )\n");
			printf("\t\t                           (    )\n");
			printf("\t\t                           (    )\n\n\n");
			printf("\t\t                                                 /\\\n");
			printf("\t\t                                                /  \\  /\\\n");
			printf("\t\t                    ________[_]________      /\\/    \\/  \\\n");
			printf("\t\t           /\\      /\\        ______    \\    /   /\\/\\  /\\/\\\n");
			printf("\t\t          /  \\    //_\\       \\    /\\    \\  /\\/\\/    \\/    \\\n");
			printf("\t\t   /\\    / /\\/\\  //___\\       \\__/  \\    \\/\n");
			printf("\t\t  /  \\  /\\/    \\//_____\\       \\ |[]|     \\\n");
			printf("\t\t /\\/\\/\\/       //_______\\       \\|__|      \\\n");
			printf("\t\t/      \\      /XXXXXXXXXX\\                  \\\n");
			printf("\t\t        \\    /_I_II  I__I_\\__________________\\\n");
			printf("\t\t               I_I|  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I_II  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I II__I  I     XXXXXXX     I\n");
			printf("\t\t               ~~~~~"   "~~~~~~~~~~~~~~~~~~~~~~~~\n");
			Sleep(125);
			system("cls");
			
			//R5
			if (load >= 0 && load <= 4) {
		        if (load == 0) {
		            printf("CARREGANDO:    1%%| ");
		        } else {
		            printf("CARREGANDO: %s", loadMessages[load]);
		        }
	    	}
			printf("\n\n\n\t\t                           (   )\n");
			printf("\t\t                           (    )\n\n\n\n");
			printf("\t\t                                                 /\\\n");
			printf("\t\t                                                /  \\  /\\\n");
			printf("\t\t                    ________[_]________      /\\/    \\/  \\\n");
			printf("\t\t           /\\      /\\        ______    \\    /   /\\/\\  /\\/\\\n");
			printf("\t\t          /  \\    //_\\       \\    /\\    \\  /\\/\\/    \\/    \\\n");
			printf("\t\t   /\\    / /\\/\\  //___\\       \\__/  \\    \\/\n");
			printf("\t\t  /  \\  /\\/    \\//_____\\       \\ |[]|     \\\n");
			printf("\t\t /\\/\\/\\/       //_______\\       \\|__|      \\\n");
			printf("\t\t/      \\      /XXXXXXXXXX\\                  \\\n");
			printf("\t\t        \\    /_I_II  I__I_\\__________________\\\n");
			printf("\t\t               I_I|  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I_II  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I II__I  I     XXXXXXX     I\n");
			printf("\t\t               ~~~~~"   "~~~~~~~~~~~~~~~~~~~~~~~~\n");
			Sleep(125);
			system("cls");
			
			//R6
			if (load >= 0 && load <= 4) {
		        if (load == 0) {
		            printf("CARREGANDO:    1%%| ");
		        } else {
		            printf("CARREGANDO: %s", loadMessages[load]);
		        }
	    	}
			printf("\n\n\n\t\t                           (   )\n\n\n\n\n");
			printf("\t\t                                                 /\\\n");
			printf("\t\t                                                /  \\  /\\\n");
			printf("\t\t                    ________[_]________      /\\/    \\/  \\\n");
			printf("\t\t           /\\      /\\        ______    \\    /   /\\/\\  /\\/\\\n");
			printf("\t\t          /  \\    //_\\       \\    /\\    \\  /\\/\\/    \\/    \\\n");
			printf("\t\t   /\\    / /\\/\\  //___\\       \\__/  \\    \\/\n");
			printf("\t\t  /  \\  /\\/    \\//_____\\       \\ |[]|     \\\n");
			printf("\t\t /\\/\\/\\/       //_______\\       \\|__|      \\\n");
			printf("\t\t/      \\      /XXXXXXXXXX\\                  \\\n");
			printf("\t\t        \\    /_I_II  I__I_\\__________________\\\n");
			printf("\t\t               I_I|  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I_II  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I II__I  I     XXXXXXX     I\n");
			printf("\t\t               ~~~~~"   "~~~~~~~~~~~~~~~~~~~~~~~~\n");
			Sleep(125);
			system("cls");
			
			//R7
			if (load >= 0 && load <= 4) {
		        if (load == 0) {
		            printf("CARREGANDO:    1%%| ");
		        } else {
		            printf("CARREGANDO: %s", loadMessages[load]);
		        }
	    	}
	
			printf("\n\n\n\n\n\n\n\n");
			printf("\t\t                                                 /\\\n");
			printf("\t\t                                                /  \\  /\\\n");
			printf("\t\t                    ________[_]________      /\\/    \\/  \\\n");
			printf("\t\t           /\\      /\\        ______    \\    /   /\\/\\  /\\/\\\n");
			printf("\t\t          /  \\    //_\\       \\    /\\    \\  /\\/\\/    \\/    \\\n");
			printf("\t\t   /\\    / /\\/\\  //___\\       \\__/  \\    \\/\n");
			printf("\t\t  /  \\  /\\/    \\//_____\\       \\ |[]|     \\\n");
			printf("\t\t /\\/\\/\\/       //_______\\       \\|__|      \\\n");
			printf("\t\t/      \\      /XXXXXXXXXX\\                  \\\n");
			printf("\t\t        \\    /_I_II  I__I_\\__________________\\\n");
			printf("\t\t               I_I|  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I_II  I__I_____[]_|_[]_____I\n");
			printf("\t\t               I II__I  I     XXXXXXX     I\n");
			printf("\t\t               ~~~~~"   "~~~~~~~~~~~~~~~~~~~~~~~~\n");
			Sleep(125);
			system("cls");
			
		
	
		if(i >3){
			ani = true;
		}
	
	}


    // Loop principal
    while (!exitMenu) {
        system("cls");

		//Inicio Variáveis Tempo
		time_t tempoAtual;
		time(&tempoAtual); 
			   
		// Converte o tempo em uma representação de calendário local
		struct tm* tempoLocal = localtime(&tempoAtual);
			   
		// Obtém os componentes individuais da data e hora
		int ano = tempoLocal->tm_year + 1900; // Adiciona 1900 ao ano
		int mes = tempoLocal->tm_mon + 1;     // Adiciona 1 ao mês (0-11)
		int dia = tempoLocal->tm_mday;         // Dia do mês (1-31)
		int hora = tempoLocal->tm_hour;        // Hora do dia (0-23)
		int minuto = tempoLocal->tm_min;       // Minuto da hora (0-59)
		int segundo = tempoLocal->tm_sec;      // Segundo do minuto (0-59)
			   
		clock_t elapsedTime = clock() - start; // Tempo decorrido em clocks
		double seconds = (double)elapsedTime / CLOCKS_PER_SEC; // Tempo decorrido em segundos
				
		int minutes = (int)(seconds / 60) % 60; // Tempo decorrido em minutos (0-59)
		int hours = (int)(seconds / 3600) % 24; // Tempo decorrido em horas (0-23)
		int days = (int)(seconds / 86400); // Tempo decorrido em dias
		
		// Exibir o menu
		printf("|-------------------------|--------- Tempo decorrido:     %02d dias, %02d:%02d:%02d ------------------------|\n", days, hours, minutes, (int)seconds % 60);
        printf("|  Selecione uma opção:   |          Data e hora atual: %02d/%02d/%04d %02d:%02d:%02d                         |\n", dia, mes, ano, hora, minuto, segundo);
        printf("|                         |           ___  __  __  ___                                              |\n");
        printf("|  %s Comprar             |          |_ _||  \\/  || _ )                                             |\n", (selectedItem == 0) ? "->" : "  ");
        printf("|  %s Vender              |           | | | |\\/| || _ \\    W e S para se mover                      |\n", (selectedItem == 1) ? "->" : "  ");
        printf("|  %s Relatorio           |          |___||_|  |_||___/    ENTER para confirmar                     |\n", (selectedItem == 2) ? "->" : "  ");
        printf("|  %s Sair                |                                                                         |\n", (selectedItem == 3) ? "->" : "  ");
        printf("|                         |                                                                         |\n");
        printf("|-------------------------|-------------------------------------------------------------------------|\n");
        
        
        
        
        
        //INICIO CONTEUDO
        
        	//COMPRAR
	        if(selectedItem ==0){
	        	
	        	if(qtdImV==0){
	        		printf("\n|");
		        	for(int i=1; i<100; i++){
		        		printf("-");
					}
					printf("|\n");
				
						printf("|\t\t\t\t\t\t\t\t\t\t\t\t    |\n");
						printf("|\t\t\t\t\t\t\t\t\t\t\t\t    |\n");
						printf("|\t\t\t    Ainda não existem Imoveis no nosso sistema!\t\t\t\t    |\n");
						printf("|\t\t\t\t\t\t\t\t\t\t\t\t    |\n");
						printf("|\t\t\t\t\t\t\t\t\t\t\t\t    |");			
				
		        	printf("\n|");
		        	for(int i=1; i<100; i++){
		        		printf("-");
					}	
		        	printf("|");
				}
				
				
				else{
					printf("\n|");
		        	for(int i=1; i<100; i++){
		        		printf("-");
					}
					printf("|\n");
					
					printf("|\t\t\t\t\t\t\t\t\t\t\t\t    |\n");                               
					printf("|\t\t\t    Existem %5d Imoveis cadastrados no nosso sistema\t\t\t    |\n", qtdImV);
					printf("|\t\t\t                                        \t\t\t\t    |\n");
					printf("|\t\t\t    Para conseguir comprar pressione ENTER\t\t\t\t    |\n");
					printf("|\t\t\t\t\t\t\t\t\t\t\t\t    |");
					
		        	printf("\n|");
		        	for(int i=1; i<100; i++){
		        		printf("-");
					}	
		        	printf("|");
				}
				
	        	
			}
			
			//VENDER
			else if(selectedItem ==1){
	
	        		printf("\n|");
		        	for(int i=1; i<100; i++){
		        		printf("-");
					}
					printf("|\n");
					
					printf("|\t\t\t\t\t\t\t\t\t\t\t\t    |\n");                               
					printf("|\t\t\t                                        \t\t\t\t    |\n");
					printf("|\t\t\t    Para conseguir vender pressione ENTER\t\t\t\t    |\n");
					printf("|\t\t\t                                        \t\t\t\t    |\n");
					printf("|\t\t\t\t\t\t\t\t\t\t\t\t    |");
					
		        	printf("\n|");
		        	for(int i=1; i<100; i++){
		        		printf("-");
					}	
		        	printf("|");
	        	
			}
			
			//RELATORIO
			else if(selectedItem ==2){
				
	        		printf("\n|");
		        	for(int i=1; i<100; i++){
		        		printf("-");
					}
					printf("|\n");
					
					printf("|\t\t\t\t\t\t\t\t\t\t\t\t    |\n");
					printf("|\t\t\t   Relatorio sobre opções\t\t\t\t                    |\n");
					printf("|\t\t\t                                        \t\t\t\t    |\n");
					printf("|\t\t\t    %5d vezes na opção Compra\t\t\t\t                    |\n", op1);
					printf("|\t\t\t    %5d vezes na opção Vender\t\t\t\t                    |\n", op2);
					printf("|\t\t\t    %5d vezes na opção Relatorio\t\t\t\t            |\n", op3);
					printf("|\t\t\t                                        \t\t\t\t    |\n");
					printf("|\t\t\t    Existem no total: %5d Imoveis\t\t\t\t            |\n", qtdImV);
					printf("|\t\t\t    Foram vendidos:   %5d Imoveis\t\t\t\t            |\n", qtdImVen);
					printf("|\t\t\t                                        \t\t\t\t    |\n");
					printf("|\t\t\t                                        \t\t\t\t    |\n");
					printf("|\t\t\t\t\t\t\t\t\t\t\t\t    |");	
					
		        	printf("\n|");
		        	for(int i=1; i<100; i++){
		        		printf("-");
					}	
		        	printf("|");
	        	
			}
			
			//SAIR
			else if(selectedItem ==3){
				
	        	printf("\n|");
	        	for(int i=1; i<100; i++){
	        		printf("-");
				}
				printf("|\n");
				
				//INCIO SAIR
				
						printf("|\t\t\t      ______    ______   ______  _______                   \t\t    |\n");      
						printf("|\t\t\t     /      \\  /      \\ |      \\|       \\              \t\t\t    |\n");     
						printf("|\t\t\t    |  $$$$$$\\|  $$$$$$\\ \\$$$$$$| $$$$$$$\\             \t\t\t    |\n");     
						printf("|\t\t\t    | $$___\\$$| $$__| $$  | $$  | $$__| $$                \t\t    |\n");    
						printf("|\t\t\t     \\$$    \\ | $$    $$  | $$  | $$    $$               \t\t    |\n");    
						printf("|\t\t\t     _\\$$$$$$\\| $$$$$$$$  | $$  | $$$$$$$\\              \t\t    |\n");    
						printf("|\t\t\t    |  \\__| $$| $$  | $$ _| $$_ | $$  | $$                \t\t    |\n");    
						printf("|\t\t\t     \\$$    $$| $$  | $$|   $$ \\| $$  | $$               \t\t    |\n");    
						printf("|\t\t\t      \\$$$$$$  \\$$   \\$$ \\$$$$$$ \\$$   \\$$           \t\t\t    |\n");    
                        printf("|\t\t\t\t\t\t\t\t\t\t\t\t    |");
				
				//FIM SAIR
				
	        	printf("\n|");
	        	for(int i=1; i<100; i++){
	        		printf("-");
				}	
	        	printf("|");
	        	
	        	
	        	
			}
		
        //FIM CONTEUDO





        
        if (_kbhit()) {
        	/*
				A função _kbhit() é uma função da biblioteca conio.h que verifica se uma tecla foi pressionada no teclado. 
				Ela retorna um valor inteiro indicando se uma tecla está disponível ou não.

				A função _kbhit() é frequentemente usada em programas de console para verificar a 
				entrada do usuário sem bloquear a execução do programa. 
				Ela permite que o programa continue sua execução normalmente enquanto aguarda uma entrada do teclado.
			*/
            char key = _getch();
            
            switch (key) {
                case 'w':
                case 'W':
                    selectedItem = (selectedItem - 1 + 4) % 4; // Navegar para cima
                    break;
                case 's':
                case 'S':
                    selectedItem = (selectedItem + 1) % 4; // Navegar para baixo
                    break;
                case '\r':
                    
                    switch (selectedItem) {
                        case 0:
                            op1++;
                            exitMenu = true;
                            break;
                        case 1:
                            op2++;
                            
                            exitMenu = true;
                            break;
                        case 2:
                            op3++;
                            exitMenu = true;
                            break;
                        case 3:
                        	system("cls");
                            exitMenu = true;
                            break;
                    }
                    break;
            }
        }

        Sleep(100); 
        
        
    }
    
    
    //loop seleção
    while(exitMenu){
    	
    	
		int i;
		char resposta;
    	
    	//Inicio Variáveis Tempo
		time_t tempoAtual;
		time(&tempoAtual); 
			   
		// Converte o tempo em uma representação de calendário local
		struct tm* tempoLocal = localtime(&tempoAtual);
			   
		// Obtém os componentes individuais da data e hora
		int ano = tempoLocal->tm_year + 1900; // Adiciona 1900 ao ano
		int mes = tempoLocal->tm_mon + 1;     // Adiciona 1 ao mês (0-11)
		int dia = tempoLocal->tm_mday;         // Dia do mês (1-31)
		int hora = tempoLocal->tm_hour;        // Hora do dia (0-23)
		int minuto = tempoLocal->tm_min;       // Minuto da hora (0-59)
		int segundo = tempoLocal->tm_sec;      // Segundo do minuto (0-59)
			   
		clock_t elapsedTime = clock() - start; // Tempo decorrido em clocks
		double seconds = (double)elapsedTime / CLOCKS_PER_SEC; // Tempo decorrido em segundos
				
		int minutes = (int)(seconds / 60) % 60; // Tempo decorrido em minutos (0-59)
		int hours = (int)(seconds / 3600) % 24; // Tempo decorrido em horas (0-23)
		int days = (int)(seconds / 86400); // Tempo decorrido em dias
    	
	    	
			// Comprar
			if (selectedItem == 0) {
		    system("cls");
		
		    if (qtdImV == 0) {
		        system("color 4");
		        printf("|-------------------------|--------- Tempo decorrido:     %02d dias, %02d:%02d:%02d ------------------------|\n", days, hours, minutes, (int)seconds % 60);
		        printf("|  Selecione uma opção:   |          Data e hora atual: %02d/%02d/%04d %02d:%02d:%02d                         |\n", dia, mes, ano, hora, minuto, segundo);
		        printf("|                         |           ___  __  __  ___                                              |\n");
		        printf("|  -> Comprar             |          |_ _||  \\/  || _ )                                             |\n");
		        printf("|     Vender              |           | | | |\\/| || _ \\    W e S para se mover                      |\n");
		        printf("|     Relatorio           |          |___||_|  |_||___/    ENTER para confirmar                     |\n");
		        printf("|     Sair                |                                                                         |\n");
		        printf("|                         |                                                                         |\n");
		        printf("|-------------------------|-------------------------------------------------------------------------|\n");
		        printf("\n|");
		        for (int i = 1; i < 100; i++) {
		            printf("-");
		        }
		        printf("|\n");
		
		        printf("|\t\t\t\t\t\t\t\t\t\t\t\t    |\n");
		        printf("|\t\t\t\t\t\t\t\t\t\t\t\t    |\n");
		        printf("|\t\t\t    Ainda não existem Imoveis no nosso sistema!\t\t\t\t    |\n");
		        printf("|\t\t\t\t\t\t\t\t\t\t\t\t    |\n");
		        printf("|\t\t\t\t\t\t\t\t\t\t\t\t    |");
		
		        printf("\n|");
		        for (int i = 1; i < 100; i++) {
		            printf("-");
		        }
		        printf("|");
		        Sleep(100);
		        return main();
		    } else {
		        printf("|-------------------------|--------- Tempo decorrido:     %02d dias, %02d:%02d:%02d ------------------------|\n", days, hours, minutes, (int)seconds % 60);
		        printf("|  Selecione uma opção:   |          Data e hora atual: %02d/%02d/%04d %02d:%02d:%02d                         |\n", dia, mes, ano, hora, minuto, segundo);
		        printf("|                         |           ___  __  __  ___                                              |\n");
		        printf("|  -> Comprar             |          |_ _||  \\/  || _ )                                             |\n");
		        printf("|     Vender              |           | | | |\\/| || _ \\    W e S para se mover                      |\n");
		        printf("|     Relatorio           |          |___||_|  |_||___/    ENTER para confirmar                     |\n");
		        printf("|     Sair                |                                                                         |\n");
		        printf("|                         |                                                                         |\n");
		        printf("|-------------------------|-------------------------------------------------------------------------|\n");
		
		        printf("\n|");
		        for (int i = 1; i < 100; i++) {
		            printf("-");
		        }
		        printf("|\n");
		
		        for (int i = 0; i < qtdImV; i++) {
		            printf("| %02d - Endereço: %-65s \n", i + 1, imoveisV[i].endereco);
		            printf("|     Valor: R$ %-58.2f \n", imoveisV[i].valor);
		            printf("|     Área: %-60.2f \n", imoveisV[i].area);
		            printf("|     Quartos: %-57d \n", imoveisV[i].quartos);
		            printf("|     Banheiros: %-55d \n", imoveisV[i].banheiros);
		            printf("|     Vagas de garagem: %-50d \n", imoveisV[i].vagas_garagem);
		            printf("|     Status: %-59s \n", imoveisV[i].status);
		            printf("|");
		            for (int i = 1; i < 100; i++) {
		                printf("-");
		            }
		            printf("|\n");
		        }
		        printf("|");
		        for (int i = 1; i < 100; i++) {
		            printf("-");
		        }
		        printf("|\n");
		        Sleep(100);
		
		        int escolha;
		        printf("\nSelecione o número do imóvel que deseja comprar (ou digite 0 para cancelar): ");
		        scanf("%d", &escolha);
		
		        if (escolha >= 1 && escolha <= qtdImV) {
		            qtdImVen++;
		
		            printf("\nCompra do imóvel realizada com sucesso!\n");
		            
		        } else if (escolha == 0) {
		            printf("\nOperação de compra cancelada.\n");
		        } else {
		            printf("\nOpção inválida. Tente novamente.\n");
		        }
		
		        printf("\nPressione ENTER para continuar...");
		        getchar();
		        getchar();
		
		        return main();
		    }
		}
		
			// Vender
			else if (selectedItem == 1) {
			    system("cls");
			    if (qtdImV == MAX_IMOVEIS) {
			        system("color 4");
			        printf("|-------------------------|--------- Tempo decorrido:     %02d dias, %02d:%02d:%02d ------------------------|\n", days, hours, minutes, (int)seconds % 60);
			        printf("|  Selecione uma opção:   |          Data e hora atual: %02d/%02d/%04d %02d:%02d:%02d                         |\n", dia, mes, ano, hora, minuto, segundo);
			        printf("|                         |           ___  __  __  ___                                              |\n");
			        printf("|     Comprar             |          |_ _||  \\/  || _ )                                             |\n");
			        printf("|  -> Vender              |           | | | |\\/| || _ \\    W e S para se mover                      |\n");
			        printf("|     Relatorio           |          |___||_|  |_||___/    ENTER para confirmar                     |\n");
			        printf("|     Sair                |                                                                         |\n");
			        printf("|                         |                                                                         |\n");
			        printf("|-------------------------|-------------------------------------------------------------------------|\n");
			        printf("\n|");
			        for (int i = 1; i < 100; i++) {
			            printf("-");
			        }
			        printf("|\n");
			
			        printf("|\t\t\t\t\t\t\t\t\t\t\t\t    |\n");
			        printf("|\t\t\t\t\t\t\t\t\t\t\t\t    |\n");
			        printf("|\t\tNão é possível cadastrar mais imóveis. Limite máximo atingido.\t\t\t    |\n");
			        printf("|\t\t\t\t\t\t\t\t\t\t\t\t    |\n");
			        printf("|\t\t\t\t\t\t\t\t\t\t\t\t    |");
			
			        printf("\n|");
			        for (int i = 1; i < 100; i++) {
			            printf("-");
			        }
			        printf("|");
			        printf("\nPressione ENTER para continuar...");
		        	getchar();
		        	getchar();
			        return main();
			    } else {
			        printf("|-------------------------|--------- Tempo decorrido:     %02d dias, %02d:%02d:%02d ------------------------|\n", days, hours, minutes, (int)seconds % 60);
			        printf("|  Selecione uma opção:   |          Data e hora atual: %02d/%02d/%04d %02d:%02d:%02d                         |\n", dia, mes, ano, hora, minuto, segundo);
			        printf("|                         |           ___  __  __  ___                                              |\n");
			        printf("|     Comprar             |          |_ _||  \\/  || _ )                                             |\n");
			        printf("|  -> Vender              |           | | | |\\/| || _ \\    W e S para se mover                      |\n");
			        printf("|     Relatorio           |          |___||_|  |_||___/    ENTER para confirmar                     |\n");
			        printf("|     Sair                |                                                                         |\n");
			        printf("|                         |                                                                         |\n");
			        printf("|-------------------------|-------------------------------------------------------------------------|\n");
			
			        printf("\n");
			        printf("Informe os dados do imóvel:\n");
			        printf("Endereço: ");
			        scanf(" %[^\n]s", imoveisV[qtdImV].endereco);
			        printf("Valor: ");
			        scanf("%f", &imoveisV[qtdImV].valor);
			        printf("Área: ");
			        scanf("%f", &imoveisV[qtdImV].area);
			        printf("Quartos: ");
			        scanf("%d", &imoveisV[qtdImV].quartos);
			        printf("Banheiros: ");
			        scanf("%d", &imoveisV[qtdImV].banheiros);
			        printf("Vagas de garagem: ");
			        scanf("%d", &imoveisV[qtdImV].vagas_garagem);
			        strcpy(imoveisV[qtdImV].status, "Disponível");
			
			        qtdImV++;
			
			        printf("\nImóvel cadastrado com sucesso!\n");
			        printf("\nPressione ENTER para continuar...");
		        	getchar();
		        	getchar();
			        return main();
			    }
			}
			
				
			
			//Relatorio
			else if(selectedItem == 2){
		    	return main();
			}
			
			//Sair
			else if(selectedItem == 3){
				return 0;
			}
			
			Sleep(125);
		}


	return 0;
}



