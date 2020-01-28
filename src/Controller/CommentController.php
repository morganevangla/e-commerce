<?php

namespace App\Controller;
use dump;
use App\Entity\Comments;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

class CommentController extends AbstractController
{
    /**
     * @Route("/api/commment/{id}", name="comment")
     */
    public function index($id)
    {
        $repository = $this->getDoctrine()->getRepository(Comments::class);
        $comment = $repository->findBy(['product' => $id]);
        dump($comment);
        $commentArray = array();
        foreach ($comment as $comments) {
        $commentArray[] = array(
            'message' => $comments->getComments(),
            'dcomment' => $comments->getDcomment(),
            'users' => [
                'name' => $comments->getUser()->getLastName(),
                'image' => $comments->getUser()->getPicture(),
            ]);
        } 

         return new JsonResponse($commentArray);
    }

        /**
     * @Route("/api/comment/add", name="submit", methods={"POST"})
     */
    public function submit(Request $request, EntityManagerInterface $manager)
    {        
        $comment = new Comments();
        $data = json_decode($request->getContent());
        $user = $data[0];
        $produit = $data[1];
        $texte = $data[2];
        
        $comment->setUser($manager->getReference('App\Entity\Users', $user));
        $comment->setProduct($manager->getReference('App\Entity\Products', $produit));
        $comment->setComments($texte);
        $comment->setDcomment(new \DateTime());
        dump($comment);

        $manager->persist($comment);
        $manager->flush();

        return new JsonResponse([
            'success_message' => 'Message envoyé'
        ]);
    }
}
